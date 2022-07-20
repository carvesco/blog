
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/welcome/welcome";
import "antd/dist/antd.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Post from "./Pages/posts/post";

function App() {
  return (
    <GoogleOAuthProvider clientId="984282134975-0v3vgk8ip0s7d45ssg8n0dgrjjv8b4r3.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/posts" element={<Post />}/>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
