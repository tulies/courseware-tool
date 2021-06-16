import React,{ useEffect, useState } from "react";
import { Route } from "react-router-dom";
import BlankLayout from "@/layouts/BlankLayout";
// import { observer } from "mobx-react";
import {getRoutes} from "./routes";
// import { useStore } from "@/store/uses";

export default () => {
  const [routes, setRoutes] = useState([])
  useEffect(()=>{
    setRoutes(getRoutes())
  },[])
  // local
  return (
    <>
      {routes &&
        routes.map((router, index) => {
          // 不要问我为什么写多层循循序不做个组件，因为懒，。。
          return (
            <Route
              exact={router.exact}
              key={index}
              path={router.path}
              auth={router.auth || ""}
              render={(props) => {
                return (
                  <router.component {...props} routes={router.children}>
                    {router.children &&
                      router.children.map((router2, index2) => {
                        return (
                          <Route
                            // exact={router.exact}
                            key={index2}
                            path={router2.path}
                            render={(props2) => {
                              const RouterChild2 =
                                router2.component || BlankLayout;
                              return (
                                <RouterChild2
                                  {...props2}
                                  routes={router2.children}
                                >
                                  {router2.children &&
                                    router2.children.map((router3, index3) => {
                                      return (
                                        <Route
                                          // exact={router.exact}
                                          key={index3}
                                          path={router3.path}
                                          render={(props3) => (
                                            <router3.component
                                              {...props3}
                                              routes={router2.children}
                                            ></router3.component>
                                          )}
                                        />
                                      );
                                    })}
                                </RouterChild2>
                              );
                            }}
                          />
                        );
                      })}
                  </router.component>
                );
              }}
            />
          );
        })}
    </>
  );
};
