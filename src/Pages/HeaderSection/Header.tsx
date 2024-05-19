import {
  StyledMainDiv,
  TextDiv,
  ImagineDiv,
  LogoDiv,
  ParaphraseDiv,
  ExploreButton,
} from "./Header.styled.ts";
import Logo from "../../assets/dvorak.svg";
import ColorfulLogo from "../../assets/colorfunlogo.svg";
import { useState } from "react";

const HeaderDiv = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleLogoHover = () => {
    setIsLogoHovered(true);
  };

  const handleLogoLeave = () => {
    setIsLogoHovered(false);
  };

  return (
    <StyledMainDiv>
      <TextDiv>
        <ImagineDiv>
          Imagination is the <del>limit</del>
        </ImagineDiv>
        <ParaphraseDiv>
          We’re passionate about technology and innovation || Focus on your
          business while we handle the tech || We use cutting-edge technologies
          and industry best practices || Our commitment ensures smooth project
          execution
        </ParaphraseDiv>
        <ExploreButton>Explore DI</ExploreButton>
      </TextDiv>
      <LogoDiv
        src={isLogoHovered ? ColorfulLogo : Logo}
        onMouseEnter={handleLogoHover}
        onMouseLeave={handleLogoLeave}
      />
    </StyledMainDiv>
  );
};

export default HeaderDiv;
