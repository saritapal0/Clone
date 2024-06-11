import React, { useState } from "react";
import { experimentalStyled, useMediaQuery, Container, Box, CssBaseline } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Header from '../layouts/Header/Header';
import Footer from "../layouts/Footer/Footer";
import { TopbarHeight } from "../assets/global/Theme-variable";


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
  height: "100%", // Set the height to 100% of the parent container
  width: "100%", // Set the width to 100% of the parent container
  [theme.breakpoints.up("lg")]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));


const FullLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  //const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));


  return (
    <MainWrapper>
      <Header/>
      <PageWrapper>
        <Container
          minWidth={false}
          sx={{
             pt:5,
          }}
        >
          <Box>
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
