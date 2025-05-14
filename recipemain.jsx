import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./header";
import { Body } from "./body";
import { Footer } from "./footer";
import { Contact } from "./Contact";
import { AboutUS } from "./AboutUS";
import { Recipeinformation } from "./Recipeinformation";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";

const WebPage = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <br></br>
            <br></br>
            <Footer></Footer>
            

        </>



    )



}

const AppRouter = createBrowserRouter([
    {
        path:"/",element:<WebPage></WebPage>,
        children:[
            {
                path:"/",element:<Body></Body>
            },
            {
                path:"/AboutUS",element:<AboutUS></AboutUS>
            },
            {
                path:"/Contact",element:<Contact></Contact>
            },
            {
                path:"",element:<Recipeinformation></Recipeinformation>
            } 
        ]
    }
])


const Root = createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={AppRouter}></RouterProvider>)