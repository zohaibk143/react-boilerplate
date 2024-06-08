import React, { useState, useEffect, useRef } from 'react';
import {
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";
import HeaderComponent from "../header";
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const LayoutComponent = (props) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(location.pathname);
  const siderRef = useRef(null);  // Using ref for Sider

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: '/cabrige-list',
      icon: <AppstoreAddOutlined className="sidebar-icons" />,
      children: 'Codes Definition List',
      className: 'side-bar-menu-content',
    },
    {
      key: '/cabrige-mapping',
      icon: <AppstoreAddOutlined className="sidebar-icons" />,
      children: 'Codes Mapping List',
      className: 'side-bar-menu-content',
    },
    // Add more items as needed
  ];

  useEffect(() => {
    if (location && current !== location.pathname) {
      setCurrent(location.pathname);
    }
  }, [location, current]);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="layout-header">
        <HeaderComponent />
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          ref={siderRef}  // Attach ref to Sider
          className="layout-sider"
        >
          
          <Menu
            className="side-bar-menu"
            theme="light"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="inline"
          >
            {items.map((item) => (
              <Menu.Item className='side-bar-menu-content' key={item.key} icon={item.icon}>
                <Link to={item.key}>{item.children}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content className="site-layout-background">
            <div className="content-wrapper">{props.children}</div>
          </Content>
          <Footer className="layout-footer">
            Shifa International Hospitals Islamabad ©{new Date().getFullYear()} All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
