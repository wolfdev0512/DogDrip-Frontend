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
import { Join } from "section/Affiliate";
// @styled-component
import { CollectionBackground, TeamBackground } from "./Landing.styled";

//------------------------------------------------------

const Landing: React.FC = () => {
  return (
    <PageLayout>
      <Hero />
      <Mint />
      <Story />
      <CollectionBackground>
        <Collection />
        <Roadmap />
      </CollectionBackground>
      <TeamBackground>
        <Team />
        <FAQ />
        <Join />
      </TeamBackground>
    </PageLayout>
  );
};

export default Landing;
