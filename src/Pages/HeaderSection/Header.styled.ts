import styled from "styled-components";

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  padding-top: 7vw !important;
  padding-bottom: 9vw !important;

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
  font-size: 92px;
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
  font-size: 1vw;
  padding: 2vw 0;
  text-align: justify;
  width: 85%;

  @media (max-width: 768px) {
    font-size: 2vw;
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
    width: 15vw;
    height: 8vw;
    font-size: 2vw;
  }
`;

const LogoDiv = styled.img`
  max-height: 40vw;

  @media (max-width: 768px) {
    max-height: 30vw;
  }
`;

export {
  StyledMainDiv,
  TextDiv,
  ImagineDiv,
  LogoDiv,
  ParaphraseDiv,
  ExploreButton,
};
