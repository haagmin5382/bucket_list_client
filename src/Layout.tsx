import React from "react";
import Header from "./layout/Header";
import NavigationBar from "./layout/NavigationBar";
import { Container } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
      <NavigationBar />
    </>
  );
};

export default Layout;
