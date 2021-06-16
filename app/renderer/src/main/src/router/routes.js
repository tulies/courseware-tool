// import {
//   GatewayOutlined,
// } from "@ant-design/icons";

// import loadable from "@loadable/component";
// import { Redirect } from "react-router-dom";
// import BlankLayout from "@/layouts/BlankLayout";
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
];
export function getRoutes() {
  let routes = [
    // ...userRoutes(),
    {
      path: "/",
      name: "",
      component: Home,
      exact: true,
    },
    ...baseRoutes(),
  ];

  return routes;
}
