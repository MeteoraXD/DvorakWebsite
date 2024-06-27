import {
  StyledMainDiv,
  TextDiv,
  ImagineDiv,
  LogoDiv,
  ParaphraseDiv,
  ExploreButton,
  ColoredLogoDiv,
  LogoContainer,
} from "./Header.styled.ts";
import Logo from "../../assets/dvorak.svg";
import ColorfulLogo from "../../assets/colorfunlogo.svg";

const HeaderDiv = () => {
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
      <LogoContainer>
        <LogoDiv src={Logo} />
        <ColoredLogoDiv src={ColorfulLogo} />
      </LogoContainer>
    </StyledMainDiv>
  );
};

export default HeaderDiv;
