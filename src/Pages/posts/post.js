import Axios from "axios";
import React, { useState, useEffect } from "react";

const Post = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await Axios.get("https://dummyapi.io/data/v1/", {
      headers: { "app-id": "62d817acf8cecea553708f54" },
    }).then((res) => {
      console.log(res);
    });
  };
  return <h1>Posts</h1>;
};

export default Post;
