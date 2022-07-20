import Axios from "axios";
import React, { useState, useEffect } from "react";
import PostCard from "../../Components/postCard/postCard";
import "./post.css";
import { useSearchParams } from "react-router-dom";
import { Row, Spin } from "antd";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [params] = useSearchParams();
  console.log(params?.get("id"));
  const tag = params?.get("id");
  useEffect(() => {
    getData();
  }, [tag]);
  const getData = async () => {
    if (tag) {
      console.log("tafssss");
      await Axios.get(`https://dummyapi.io/data/v1/tag/${tag}/post`, {
        headers: { "app-id": "62d817acf8cecea553708f54" },
      }).then((res) => {
        setLoadingPosts(false);
        console.log(res);
        setData(res?.data?.data);
      });
    } else {
      await Axios.get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": "62d817acf8cecea553708f54" },
      }).then((res) => {
        setLoadingPosts(false);
        console.log(res);
        setData(res?.data?.data);
      });
    }
  };
  return (
    <>
      <div className="titleContainer">
        <h1 className="title">Posts</h1>
      </div>
      <div className="titleContainer">
        <h1 className="titleUsers" onClick={() => {navigate("/users")}}>
          Users
        </h1>
      </div>

      {loadingPosts ? (
        <Row justify="space-around" align="middle">
          <Spin />
        </Row>
      ) : (
        <>
          <div className="postContainer">
            {data.map((itm) => (
              <div style={{ marginTop: "20px" }}>
                <PostCard props={itm} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Post;
