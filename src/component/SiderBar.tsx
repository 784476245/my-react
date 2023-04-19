import React from "react";
import {items} from "../router/router";
import {Menu, MenuProps} from "antd";
import {useNavigate} from "react-router-dom";
const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#3ba0e9',
  height: '100vh-128px', //todo  导航栏高度
  overflowX: 'hidden',
  width: 256,
};
const SiderBar: React.FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      style={siderStyle}
      defaultSelectedKeys={['/']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
}
export default SiderBar;