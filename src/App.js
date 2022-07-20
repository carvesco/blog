
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/welcome/welcome";
import "antd/dist/antd.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Post from "./Pages/posts/post";
import UsersPage from "./Pages/users/users";

function App() {
  return (
    <GoogleOAuthProvider clientId="984282134975-0v3vgk8ip0s7d45ssg8n0dgrjjv8b4r3.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route exact path="/blog" element={<Welcome />} />
          <Route exact path="/posts" element={<Post />}/>
          <Route exact path="/users" element={<UsersPage />}/>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
