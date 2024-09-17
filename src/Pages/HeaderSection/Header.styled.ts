import styled, { keyframes } from "styled-components";

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
  .del {
    font-weight: bold;
  }

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
  width: 7vw;
  height: 3vw;
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
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 40vw;
  }
`;

const LogoDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  svg {
    fill: rgb(63, 94, 251);
    transition: fill 0s;
    mask: url(#waterMask);
  }

  &:hover g {
    fill: #05054d;
    /* mask: url(#waterMask); */
    background: linear-gradient(red, yellow);
  }
`;

export {
  StyledMainDiv,
  TextDiv,
  ImagineDiv,
  LogoDiv,
  ParaphraseDiv,
  ExploreButton,
  LogoContainer,
};
