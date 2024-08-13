import {useRoutes} from "react-router-dom";
import LoginPage from "../components/pages/login/LoginPage";
import Home from "../components/pages/home/Home";

const RouterConfigs = () => {
    return useRoutes([
        {
            path: "/",
            element: <LoginPage/>
        },
        {
            path: "/home",
            element: <Home/>
        },
        {path: "*", element: <h1>page not found</h1>},
    ]);
};

export default RouterConfigs;