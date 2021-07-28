import React from 'react'
import './NavBar.css';
import { Layout, Menu} from 'antd';
import {Link} from '@material-ui/core'



const { Header } = Layout;

function NavBar() {
    return (
        <Layout className="layout">
        <Header style={{backgroundColor:'white'}}>
          <div className="logo"><Link href="/"></Link></div>
          <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"> <Link href="/">HOME</Link> </Menu.Item>
          <Menu.Item key="2">PROPERTY</Menu.Item>
          <Menu.Item key="3">PAGES</Menu.Item>
          <Menu.Item key="3">PAGES</Menu.Item>
          <Menu.Item key="4" >SHOP</Menu.Item>
          </Menu>

        </Header>
        
      </Layout>
    )
}

export default NavBar
