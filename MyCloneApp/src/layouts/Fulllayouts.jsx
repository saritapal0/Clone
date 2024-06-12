import React from "react";
import { experimentalStyled, Container, Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from '../layouts/Header/Header';
import Footer from "../layouts/Footer/Footer";

const FullLayout = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          overflowY: "scroll", // Enable vertical scrolling
          "&::-webkit-scrollbar": {
            display: "none", // Hide the scrollbar for Chrome, Safari, and Opera
          },
          scrollbarWidth: "none", // Hide the scrollbar for Firefox
        }}
      >
        <Box py={5} >
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FullLayout;
