import React, { useState, useEffect } from "react";
import { Form, Input, Avatar, Button, Typography, message } from "antd";
import { UserOutlined, LoginOutlined, LockOutlined } from "@ant-design/icons";
import { loginLogo } from "../../assets/images/index";
/* import { loginUser } from "../../api/api"; */
const { Text } = Typography;
const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
 /*  const onFinish = async (values) => {
    setIsLoading(true);
    await loginUser(values)
      .then((res) => {
        if (res.status) {
          message.success(res?.message);
          setIsLoading(false);
          window.open("/list", "_self");
        } else {
          message.error(res.response.data?.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        message.error("Error! Login");
        setIsLoading(false);
      });
  }; */
/*   useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated == "true") {
      window.open("/cabrige-list", "_self");
    }
  }, []); */
  return (
    <div className="bg-login">
      <div className="login-container">
        <div className="login-logo">
          <img alt="login-logo" src={loginLogo} className="" />
        </div>
        <div>
          <Form
            className="login-form-container"
            // {...layout}
            /* onFinish={onFinish} */
            name="loginForm"
            initialValues={{ remember: true }}
            //onFinishFailed={onFinishFailed}
          >
            <label className="login-form-container-label">Username</label>
            <Form.Item
              //label="Username"
              name="email"
              rules={[{ message: "Please input your username!" }]}
              className="login-form-container-data"
            >
              <Input
                className="login-input"
                placeholder="Enter User Name"
                suffix={
                  <Avatar
                    className="login-input-icon"
                    icon={<UserOutlined />}
                  />
                }
                required={true}
              />
            </Form.Item>
            <label className="login-form-container-label">Password</label>
            <Form.Item
              //label="Password"
              name="password"
              rules={[{ message: "Please input your password!" }]}
              className="login-form-container-data"
            >
              <Input
                type="password"
                className="login-input"
                placeholder="Enter Password"
                suffix={
                  <Avatar
                    className="login-input-icon"
                    icon={<LockOutlined />}
                  />
                }
                required={true}
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="login-submit-btn"
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Login {<LoginOutlined className="login-submit-button" />}
              </Button>
            </Form.Item>
            {/* <Text
              className="forgot-password"
              type="secondary"
              // onClick={() => history.push({
              //   pathname: "/forgotPassword"
              // })}
            >
              Forgot Password
            </Text> */}
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
