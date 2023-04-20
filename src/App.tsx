import React from 'react';
import './App.less';
import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import SiderBar from "./component/SiderBar";

const {Header, Footer, Sider, Content} = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  backgroundColor: '#7dbcea',
  width: '100%',
  top: 0,
  position: 'fixed'
};

const siderStyle: React.CSSProperties = {
  position: fixed;
  left: 0;
  top: 64px;
  bottom: 64px;
};

const contentStyle: React.CSSProperties = {
  height: 'calc(100vh - 128px)', // todo
  marginLeft: 256,
  marginTop: 64,
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
