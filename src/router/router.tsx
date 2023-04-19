import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Board from "../component/Board";
import Article from "../component/Article";
import {MenuProps} from "antd";
import {AppstoreOutlined, MailOutlined} from "@ant-design/icons";

// 路由
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
          index: true, // 默认路由
          element: <Board />,
      },
      {
          path: 'article',
          element: <Article />,
      },
    ],
  },
])

// 菜单
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuProps['items'] = [
  getItem('Board', '/', <MailOutlined />),
  getItem('Article', '/article', <AppstoreOutlined />)
]
export default router;
export {items};