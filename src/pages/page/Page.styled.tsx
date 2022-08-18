import styled from "styled-components";

import LandingCollectionBg from "assets/Landing-Collection-Bg.png";
import LandingTeamBg from "assets/Landing-Team-Bg.jpg";
//----------------------------------------------------

export const CollectionBackground = styled.div`
  background: url(${LandingCollectionBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TeamBackground = styled.div`
  background: url(${LandingTeamBg});
  background-repeat: no-repeat;
  background-size: cover;
`;
