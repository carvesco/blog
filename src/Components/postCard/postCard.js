import React from "react";
import styles from "./postCard.module.css";
import { Col, Image, Row, Tag } from "antd";
const PostCard = (props) => {
  console.log(props);
  return (
    <div className={styles.cardContainer}>
      <Row style={{ height: "100%" }}>
        <Col span={11} style={{ height: "100%" }}>
          <Image
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
            <h2 className={styles.postName}>{props.props.text}</h2>
            <div className={styles.nameContainer}>
              <h3 className={styles.ownerName}>
                {props.props.owner?.firstName}
              </h3>
              <h3 className={styles.ownerName} style={{ marginLeft: "5px" }}>
                {props.props.owner?.lastName}
              </h3>
            </div>
            <div className={styles.tagsContainer}>
              {props.props.tags?.map((itm) => (
                <>
                  <Tag color="#7763FA">{itm}</Tag>
                </>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostCard;
