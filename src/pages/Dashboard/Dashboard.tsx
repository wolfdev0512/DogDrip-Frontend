import React from "react";

// @styled-component
import { Layout } from "./Dashboard.styled";

// @Layout
import Header from "components/Header/Header";

// @section
import { Hero } from "section/Dashboard";

//------------------------------------------------------

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  );
};

export default Dashboard;
