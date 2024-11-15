import  { useState } from "react";
import {
  StyledMainDiv,
  TextDiv,
  ImagineDiv,
  LogoDiv,
  ParaphraseDiv,
  ExploreButton,
  LogoContainer,
} from "./Header.styled.ts";
import DvorakLogo from "../../assets/dvorak.tsx";
import AnimatedDvorakLogo from "../../assets/animateddvorak.tsx";

const HeaderDiv = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <StyledMainDiv>
        <TextDiv>
          <ImagineDiv>
            Imagination is the <del>limit</del>
          </ImagineDiv>
          <ParaphraseDiv>
            We're passionate about technology and innovation || Focus on your
            business while we handle the tech || We use cutting-edge technologies
            and industry best practices || Our commitment ensures smooth project
            execution
          </ParaphraseDiv>
          <ExploreButton>Explore DI</ExploreButton>
        </TextDiv>
        <LogoContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          <LogoDiv>{isHovered ? <AnimatedDvorakLogo /> : <DvorakLogo />}</LogoDiv>
        </LogoContainer>
      </StyledMainDiv>
  );
};

export default HeaderDiv;
