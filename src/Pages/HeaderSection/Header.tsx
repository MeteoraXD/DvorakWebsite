import {
  StyledMainDiv,
  TextDiv,
  ImagineDiv,
  LogoDiv,
  ParaphraseDiv,
  ExploreButton,
  LogoContainer,
} from "./Header.styled.ts";
import AnimatedDvorakLogo from "../../assets/dvorak.tsx";

const HeaderDiv = () => {
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
      <LogoContainer>
        <LogoDiv>
          <AnimatedDvorakLogo />
        </LogoDiv>
      </LogoContainer>
    </StyledMainDiv>
  );
};

export default HeaderDiv;
