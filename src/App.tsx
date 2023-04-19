import React from 'react';
import './App.less';
import {Outlet, useNavigate} from "react-router-dom";
import {Layout, Menu, MenuProps} from "antd";
import {items} from "./router/router";
import SiderBar from "./component/SiderBar";

const {Header, Footer, Sider, Content} = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  width: '100%',
  top: 0,
  position: 'fixed'
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#3ba0e9',
  height: '100vh-128px', //todo  导航栏高度
  overflowX: 'hidden',
  width: 256,
  position: 'fixed',
  marginTop: 64

};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#108ee9',
  height: '100%-128px', // todo 详情高度
  marginLeft: 256,
  marginTop: 64,
  marginBottom: 64
};


const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
  height: 64,
  bottom: 0,
  position: 'fixed',
  width: '100%'
};

interface IProps {
}

const App: React.FC<IProps> = () => {


  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width={256} style={siderStyle}>
            <SiderBar/>
          </Sider>
          <Content style={contentStyle}>
            <Outlet/>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
