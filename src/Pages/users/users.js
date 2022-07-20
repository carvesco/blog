import { Avatar } from "antd";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./users.css";
const UsersPage = () => {
  useEffect(() => {
    getData();
  }, []);
  const [usersData, setUsersData] = useState([]);
  const getData = async () => {
    await Axios.get("https://dummyapi.io/data/v1/user", {
      headers: { "app-id": "62d817acf8cecea553708f54" },
    }).then((res) => {
      //setLoadingPosts(false);
      console.log(res);
      setUsersData(res?.data?.data);
    });
  };
  return (
    <>
      <div className="titleContainer">
        <h1 className="title">Users</h1>
      </div>
      {usersData.map((itm) => (
        <>
          <div className="usersList">
            <Avatar src={itm?.picture} />
            <h1 style={{color:"#7763FA",marginLeft:"5px",marginTop:"8px"}}>{itm?.firstName}</h1>
          </div>
        </>
      ))}
    </>
  );
};

export default UsersPage;
