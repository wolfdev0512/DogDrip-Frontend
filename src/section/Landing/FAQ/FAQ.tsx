import React from "react";

// @styled-components
import { Layout, Container, Title } from "./FAQ.styled";

// @accordion
import Accordion from "react-bootstrap/Accordion";

//------------------------------------------------------

const Mint: React.FC = () => {
  return (
    <Layout id="faq">
      <Container>
        <Title data-aos="fade-up">Frequently Asked Questions</Title>

        <Accordion flush data-aos="fade-up">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How many collection is the Dog Drip NFT?
            </Accordion.Header>
            <Accordion.Body>
              There are 10,000 NFTs in the collection
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How much does it cost per mint?</Accordion.Header>
            <Accordion.Body>100 USD per mint</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How many mints per wallet?</Accordion.Header>
            <Accordion.Body>Maximum of 5 mints per wallet</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What Blockchain?</Accordion.Header>
            <Accordion.Body>Solana</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What is the launch date?</Accordion.Header>
            <Accordion.Body>TBA</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Layout>
  );
};

export default Mint;
