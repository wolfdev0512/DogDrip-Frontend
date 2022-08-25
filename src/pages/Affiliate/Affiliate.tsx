import React from "react";

// @Layout
import PageLayout from "layouts/MainLayout/AppLayout";

// @Section
import {
  Hero,
  Story,
  Mint,
  Collection,
  Roadmap,
  Team,
  FAQ,
} from "section/Landing";

// @styled-component
import { CollectionBackground, TeamBackground } from "./Affiliate.styled";

//------------------------------------------------------

const Landing: React.FC = () => {
  return (
    <PageLayout>
      {/* <Hero />
      <Mint />
      <Story />
      <CollectionBackground>
        <Collection />
        <Roadmap />
      </CollectionBackground>
      <TeamBackground>
        <Team />
        <FAQ />
      </TeamBackground> */}
      Hello
    </PageLayout>
  );
};

export default Landing;
