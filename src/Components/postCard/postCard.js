import React, { useState, useEffect } from "react";
import styles from "./postCard.module.css";
import { Button, Col, Image, Row, Tag } from "antd";
import Comments from "../comments/comments";

import { Link, createSearchParams, useNavigate } from "react-router-dom";
const PostCard = (props) => {
  //console.log(props);

  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const [commentsId, setCommentsId] = useState();

  const closeComments = () => {
    setShowComments(false);
  };
  const showCommentsModla = () => {
    setShowComments(true);
  };

  const postTags = (a) => {
    console.log(a);
    //if()
    //navigate("/posts");
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <Row style={{ height: "100%" }}>
          <Col span={11} style={{ height: "100%" }}>
            <Image
              onClick={() => {
                setCommentsId(props.props.id);
                showCommentsModla();
              }}
              height={"100%"}
              width={"100%"}
              style={{
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
              src={props.props.image}
            />
          </Col>
          <Col span={13}>
            <div className={styles.textContainer}>
              <div
                onClick={() => {
                  setCommentsId(props.props.id);
                  showCommentsModla();
                }}
              >
                <h2 className={styles.postName}>{props.props.text}</h2>
                <div className={styles.nameContainer}>
                  <h3 className={styles.ownerName}>
                    {props.props.owner?.firstName}
                  </h3>
                  <h3
                    className={styles.ownerName}
                    style={{ marginLeft: "5px" }}
                  >
                    {props.props.owner?.lastName}
                  </h3>
                </div>
              </div>
              <div className={styles.tagsContainer}>
                {props.props.tags?.map((itm) => (
                  <>
                    <Button
                      style={{ backgroundColor: "#7763FA", color: "#ffffff" }}
                      onClick={() => {
                        navigate({
                          pathname: "/posts",
                          search: createSearchParams({
                            id: itm,
                          }).toString()
                        });
                      }}
                    >
                      {itm}
                    </Button>
                  </>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {showComments ? (
        <Comments
          id={commentsId}
          visible={showComments}
          close={closeComments}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default PostCard;
