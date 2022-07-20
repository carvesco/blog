import { Modal, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import styles from "./comments.module.css";
const Comments = (props) => {
  //console.log(props);
  const [Comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  useEffect(() => {
    const getDetails = async () => {
      await Axios.get(`https://dummyapi.io/data/v1/post/${props.id}/comment`, {
        headers: { "app-id": "62d817acf8cecea553708f54" },
      }).then((res) => {
        setLoadingComments(false);
        console.log(res);
        setComments(res.data.data);
      });
    };
    getDetails();
  }, []);

  return (
    <Modal
      title="Comments"
      visible={props.visible}
      onOk={props.close}
      onCancel={props.close}
    >
      {loadingComments ? (
        <>
          <Row justify="space-around" align="middle">
            <Spin />
          </Row>
        </>
      ) : (
        <>
          {Comments.length > 0 ? (
            <>
              {Comments.map((itm) => (
                <div className={styles.commentContainer}>
                  <h3 className={styles.commentOwner}>
                    {itm?.owner?.firstName}:
                  </h3>
                  <h3>{itm?.message}</h3>
                </div>
              ))}
            </>
          ) : (
            <>
              <h1>No comments for this post</h1>
            </>
          )}
        </>
      )}
    </Modal>
  );
};

export default Comments;
