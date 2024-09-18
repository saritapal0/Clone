import React, { useState } from "react";
import { experimentalStyled, useMediaQuery, Container, Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from '../Layouts/Fulllayout/Header/Header';
import Footer from "../Layouts/Fulllayout/Footer/Footer";


const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Ensure content is stacked vertically
  flex: "1 1 auto",
  justifyContent: "center", // Center content vertically
  alignItems: "center", // Center content horizontally
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
          paddingLeft: isSidebarOpen ? "265px" : "",
          backgroundColor: "#ffffff",
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      />
      <PageWrapper>
        <Container
          maxWidth="lg" // Adjust maxWidth as per your design needs
          sx={{
            paddingLeft: isSidebarOpen ? "280px" : "", // Adjust left padding based on sidebar state
            overflow: "hidden",
          }}
        >
          <Outlet />
        </Container>
      </PageWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default FullLayout;
