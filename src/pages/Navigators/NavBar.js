import React from 'react'
import './NavBar.css';
import { Layout, Menu} from 'antd';
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Row } from 'react-bootstrap';

const { Header } = Layout;

function NavBar() {
    return (
        <Layout className="layout">
        <Header style={{backgroundColor:'white'}}>
        <Row>
          <div className="logo" />
          <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">HOME</Menu.Item>
          <Menu.Item key="2">PROPERTY</Menu.Item>
          <Menu.Item key="3">PAGES</Menu.Item>
          <Menu.Item key="4">SHOP</Menu.Item>
          </Menu>
     </Row>
        </Header>
        
      </Layout>
    )
}

export default NavBar
