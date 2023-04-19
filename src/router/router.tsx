import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Board from "../component/Board";
import Article from "../component/Article";

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
export default router;