import React from 'react'
import './NavBar.css';
import { Layout, Menu} from 'antd';

const { Header } = Layout;

function NavBar() {
    return (
        <Layout className="layout">
        <Header style={{backgroundColor:'white'}}>
          <div className="logo" />
          <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Properties</Menu.Item>
          <Menu.Item key="3">Pages</Menu.Item>
          <Menu.Item key="3">Shop</Menu.Item>
          </Menu>
        </Header>
        
      </Layout>
    )
}

export default NavBar
