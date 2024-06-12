import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import FullLayout from "../layouts/Fulllayouts";
import Home from "../layouts/Home/Home"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<FullLayout />} >
     <Route index element={<Home />} />
     </Route>
    
    </>
  )
);

export default routes;
