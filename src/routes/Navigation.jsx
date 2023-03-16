import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { map } from "lodash";
import { routes } from "./router";

export const Navigation = () => {
    return (
        <HashRouter>
            <Routes>
                {map(routes, (route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    element={route.element}
                />
                ))}
            </Routes>
        </HashRouter>
    );
}