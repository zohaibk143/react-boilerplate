import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.css";
import { Spin } from "antd";
import "./index.css";

const Loading = (props) => {
  return (
    <>
      <div className="spin-loading">
        <Spin
          indicator={
            <LoadingOutlined
              style={{ fontSize: "40px", color: "#3c4c7b" }}
              spin
            />
          }
          tip={props?.message ? props?.message : "Loading..."}
        ></Spin>
      </div>
    </>
  );
};

export default Loading;
