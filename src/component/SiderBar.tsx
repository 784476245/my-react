import React, {useEffect, useState} from "react";
import {items} from "../router/router";
import {Menu, MenuProps} from "antd";
import {useNavigate} from "react-router-dom";
import {useHistory} from "../utils/UseHistory";

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#3ba0e9',
  width: 256,

};
const SiderBar: React.FC = () => {
  const navigate = useNavigate();
  const history = useHistory();
  useEffect(() => {
    const unListen = history.listen((location) => {
      console.log(location);
      setSelectedKey(location.location.pathname);
    })
    return () => {
      unListen();
    }
  }, [history]);
  const [selectedKey, setSelectedKey] = useState('/');
  const onClick: MenuProps['onClick'] = (e) => {
    setSelectedKey(e.key);
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
      selectedKeys={[selectedKey]}
    />
  );
}
export default SiderBar;