import React from "react";

// @component
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ScrollTop } from "components/Button";

// @styled-components
import { AppLayout } from "./AppLayout.styled";

// @Type
interface PageLayoutProps {
  children: React.ReactNode;
}

// -----------------------------------------------------------

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <AppLayout>
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </AppLayout>
  );
};

export default PageLayout;
