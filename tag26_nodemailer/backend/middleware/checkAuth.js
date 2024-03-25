import jwt from "jsonwebtoken";

// hier definieren wir custom middleware, die sich um die authentifizierung kuemmern soll
export const checkAuth = async (req, res, next) => {
  // check if authorization is present, abort otherwise
  if (!req.headers.authorization) {
    res.status(401).send("Please Authenticate");
    return;
  }
  const [authType, token] = req.headers.authorization.split(" ");
  // check if correct authentication strategy is used
  if (authType !== "Bearer") {
    res.status(401).send("Please use a token");
    return;
  }

  try {
    const result = jwt.verify(token, process.env.JWT_SECRET);
    // wir koennen das ergebnis in req order res schreiben um es nachfolgenden zur verfuegung stellen
    req.user = result; 
    next();
  } catch (err) {
    res.status(401).send("Your token is invalid");
    return;
  }
};
