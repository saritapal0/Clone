import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import FullLayout from "../layouts/Fulllayouts";



const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<FullLayout />} >
   </Route>
    </>
  )
);

export default routes;
