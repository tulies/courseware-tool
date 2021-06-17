// import {
//   GatewayOutlined,
// } from "@ant-design/icons";

import loadable from "@loadable/component";
// import { Redirect } from "react-router-dom";
import BlankLayout from "@/layouts/BlankLayout";
import Home from "@/pages/Home";

// export const userRoutes = () => [
//   {
//     path: "/login",
//     component: UserLayout,
//     children: [
//       {
//         name: "login",
//         path: "/login/login",
//         component: UserLogin,
//         exact: true,
//         meta: {
//           title: "登录",
//         },
//       },
//     ],
//   },
// ];
export const baseRoutes = () => [
  {
    name: "home",
    path: "/home",
    // component: loadable(() => import("@/pages/Prj/index/index")),
    component: Home,
  },
  {
    name: "setup",
    path: "/setup",
    // component: loadable(() => import("@/pages/Prj/index/index")),
    component: BlankLayout,
    children: [
      {
        name: "new",
        path: "/setup/new",
        component: loadable(() => import("@/pages/Setup/New/index")),
        exact: true,
        meta: {
          title: "创建课件",
        },
      },
    ],
  },
];
export function getRoutes() {
  let routes = [
    // ...userRoutes(),
    {
      path: "/",
      name: "stander",
      component: Home,
      exact: true,
    },
    ...baseRoutes(),
  ];

  return routes;
}
