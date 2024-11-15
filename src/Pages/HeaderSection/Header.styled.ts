import styled from "styled-components";

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  padding: 8vw 7vw;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImagineDiv = styled.div`
  font-weight: 600;
  font-size: 84px;
  line-height: 1;
  width: 75%;
  

  @media (max-width: 900px) {
    font-size: 8vw;
    width: 100%;
  }
`;

const ParaphraseDiv = styled.div`
  font-size: 16px;
  padding: 2vw 0;
  text-align: justify;
  width: 80%;

  @media (max-width: 768px) {
    padding: 4vw 0;
  }
`;

const ExploreButton = styled.button`
  width: 8vw;
  height: 4vw;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1vw;

  @media (max-width: 768px) {
    width: 16vw;
    height: 8vw;
    font-size: 3vw;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 50vw;
  height: 40vw;
  flex: 0 0 50%;
  max-width: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 40vw;
  }
`;

const BaseLogoStyles = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 1.5s ease;
  transition-delay: 0.2s;
`;

const LogoDiv = styled.div`
  width: 100%;
  ${BaseLogoStyles};
  opacity: 1;
`;

const ColoredLogoDiv = styled.div`
  ${BaseLogoStyles};
  opacity: 0;

  ${LogoContainer}:hover & {
    opacity: 1;
    transition-delay: 0.2s;
  }

  ${LogoContainer}:hover ~ ${LogoDiv} {
    opacity: 0;
    transition-delay: 0.2s;
  }
`;

export {
  StyledMainDiv,
  TextDiv,
  ImagineDiv,
  LogoDiv,
  ParaphraseDiv,
  ExploreButton,
  ColoredLogoDiv,
  LogoContainer,
};
