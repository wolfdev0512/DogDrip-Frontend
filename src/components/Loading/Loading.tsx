import React from "react";

// @assets
import LoadingImage from "assets/Loading.gif";
import LoadingText from "assets/LoadingText.png";
// @styled-components
import { Layout } from "./Loading.styled";

//------------------------------------------------------

const Loading: React.FC = () => {
  return (
    <Layout>
      <img src={LoadingImage} alt="No LoadingImage" width={250} height={250} />
      <img src={LoadingText} alt="No Text" width={250} height={100} />
    </Layout>
  );
};

export default Loading;
