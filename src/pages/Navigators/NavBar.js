import React from 'react'
import './NavBar.css';
import { Layout, Menu} from 'antd';
import { updateLocale } from 'antd/node_modules/moment';


const { Header } = Layout;

function NavBar() {
    return (
        <Layout className="layout">
        <Header style={{backgroundColor:'white'}}>
          <div className="logo" />
          <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">HOME</Menu.Item>
          <Menu.Item key="2">PROPERTY</Menu.Item>
          <Menu.Item key="3">PAGES</Menu.Item>
          <Menu.Item key="4">SHOP</Menu.Item>
          </Menu>

          <Menu mode="horizontal">
          <Menu.Item key="5">SHOP</Menu.Item>
          <Menu.Item key="6">SHOP</Menu.Item>
          </Menu>
        </Header>
        
      </Layout>
    )
}

export default NavBar
