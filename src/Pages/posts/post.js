import Axios from "axios";
import React, { useState, useEffect } from "react";
import PostCard from "../../Components/postCard/postCard";
import "./post.css";
const Post = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await Axios.get("https://dummyapi.io/data/v1/post", {
      headers: { "app-id": "62d817acf8cecea553708f54" },
    }).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  };
  return (
    <>
      <div className="titleContainer">
        <h1 className="title">Posts</h1>
      </div>
      <div className="postContainer">
        {data.map((itm) => (
          <div style={{marginTop:"20px"}}>
            <PostCard props={itm} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
