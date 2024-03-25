import { User } from "../models/user.js";

const checkAuth = async (req, res, next) => {
  console.log("Checking Auth...");
  if (!req.headers.authorization) {
    res.status(401).send("Please Authenticate");
    return;
  }
  const [authType, authBase64] = req.headers.authorization.split(" ");
  if (authType !== "Basic") {
    res.status(401).send("Please use Basic Auth");
    return;
  }
  const authString = atob(authBase64);
  const [username, password] = authString.split(":");

  const user = await User.findOne({ name: username }).lean();
  if (user === null) {
    res.status(401).send("User does not exist");
    return;
  }
  if (password !== user.password) {
    res.status(401).send("Wrong password!");
    return;
  }
  console.log("Auth successful!");

  next();
};

export default checkAuth;
