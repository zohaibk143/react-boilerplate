import React, { useState, useRef } from "react";
import {
  Layout,
  Avatar,
  Dropdown,
  Menu,
  Form,
  Spin,
  Tooltip,
  Typography,
  message,
  Grid,
  Button,
} from "antd";
import {
  LogoutOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import {
  shifa_logo,
  UserImg,
  ElderlyCareIcon,
  DiabetesCareIcon,
} from "../../assets/images/index";
const { Header } = Layout;
const { Row, Col } = Grid;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const { Title } = Typography;
const HeaderComponent = (props) => {
  const userName = "Nasir Kabir Khan";
  const userEmail = "kabir@gmail.com";

  const menuUser = () => (
    <Menu /* onClick={handleProfileMenu} */ style={{ marginTop: "10px" }}>
      <Menu.Item key="userProfile" className="header-user-menu-item">
        <Row>
          <Col span={24} className="header-user-profile">
            <Title level={4}>
              <Col>
                <Row>
                  {" "}
                  <span className="user-name">{userName && userName}</span>
                </Row>
                <Row>
                  {" "}
                  <span className="user-email">{userEmail && userEmail}</span>
                </Row>
              </Col>
            </Title>
          </Col>
        </Row>
      </Menu.Item>
      <Menu.Item key="logout">
        <Row>
          <Col style={{ display: "flex", columnGap: "6px" }} span={8}>
            <span className="user-menu-items-text">
              <LogoutOutlined className="user-icons" />
            </span>
            <span className="user-menu-items-text">Logout</span>
          </Col>
        </Row>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header-main">
      <div className="top-header-container">
        <div className="top-header-logo-container">
          <img src={shifa_logo} alt="logo" className="header-logo" />
        </div>
        <div className="top-header-logo-container" />
        {/* <div className="header-user-container">
          <Dropdown
            overlay={menuUser}
            placement="bottomLeft"
            trigger={["click"]}
          >
            <Avatar style={{ marginTop: "20px" }} src={UserImg} size={40} />
          </Dropdown>
        </div> */}

      </div>
    </Header>
  );
};
export default HeaderComponent;
