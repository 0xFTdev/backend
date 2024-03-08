import PostList from "./components/PostList";
import NewPostForm from "./components/NewPostForm";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/admin" element={<NewPostForm />} />
        <Route path="/post/:title" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
