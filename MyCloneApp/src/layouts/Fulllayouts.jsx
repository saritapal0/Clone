import React, { useState } from "react";
import { experimentalStyled, useMediaQuery, Container, Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from '../Layouts/Fulllayout/Header/Header';
import Footer from "../Layouts/Fulllayout/Footer/Footer";

const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));

const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: "72px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  

  return (
    <MainWrapper>
      <CssBaseline />
        <Header
          sx={{
            paddingLeft: isSidebarOpen  ? "265px" : "",
            backgroundColor: "#ffffff",
          }}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
          toggleMobileSidebar={() => setMobileSidebarOpen(true)}
        />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
             paddingLeft: "280px!important" ,
            overflow: "hidden",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
        <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
