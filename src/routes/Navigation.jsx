import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { map } from "lodash";
import { routes } from "./router";

export const Navigation = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}