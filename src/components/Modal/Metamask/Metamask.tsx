import React, { useRef, useEffect } from "react";

// @assets
import MetamaskImage from "assets/metamask.png";

// @styled-component
import { Layout, Modal, CloseButton, Title, Detail } from "./Metamask.styled";

// @type

interface ModalProps {
  setShow: () => void;
}

//------------------------------------------------------------------
const MetamaskModal: React.FC<ModalProps> = ({ setShow }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (modalRef.current?.contains(e.target)) {
      return;
    } else {
      if (closeRef.current?.contains(e.target)) {
        return;
      } else {
        setShow();
      }
    }
  };
  return (
    <Layout>
      <Modal data-aos="zoom-in" ref={modalRef}>
        <CloseButton
          onClick={() => {
            console.log("object");
            setShow();
          }}
          ref={closeRef}
        >
          X
        </CloseButton>
        <Title data-aos="fade-up">
          <img src={MetamaskImage} alt="No MetamaskImage" />
        </Title>
        <Detail data-aos="fade-up">
          To access this page, you must install metamask.
        </Detail>
      </Modal>
    </Layout>
  );
};

export default MetamaskModal;
