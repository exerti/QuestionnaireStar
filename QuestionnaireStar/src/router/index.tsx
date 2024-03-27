import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/common/Home";
import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import NotFound from "../pages/common/NotFound";
import ManagerLayout from "../layouts/ManagerLayout";
import List from "../pages/manager/List";
import Star from "../pages/manager/Star";
import Trash from "../pages/manager/Trash";
import QuestionLayout from "../layouts/QuestionLayout";
import Edit from "../pages/question/edit";
import Stat from "../pages/question/stat";
import FormElementsDemo from "../demo/表单组件/FormElementsDemo";
import ContextDemo from "../demo/context";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/*",
                element: <NotFound></NotFound>
            },
            {
                path: "/manager",
                element: <ManagerLayout></ManagerLayout>,
                children: [
                    {
                        path: "/manager/list",
                        element: <List></List>
                    }, {
                        path: "/manager/star",
                        element: <Star></Star>
                    }, {
                        path: "/manager/tarsh",
                        element: <Trash></Trash>
                    }]
            }
        ]
    },
    {
        path: "/question",
        element: <QuestionLayout></QuestionLayout>,
        children: [
            {
                path: "/question/edit/:id",
                element: <Edit></Edit>
            },
            {
                path: "/question/stat/:id",
                element: <Stat></Stat>
            }
        ]
    }



    , {
        path: "/demo",
        element: <FormElementsDemo></FormElementsDemo>
    }, {
        path: "/demo/context",
        element: <ContextDemo></ContextDemo>
    }
])

export default router;



// --------------

export const HOME_PATH = '/'