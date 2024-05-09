import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
  gap: 100px;
  margin: 300px 0;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 20px;
  }
`;

const TitleButtonDiv = styled.div`
  width: 50%;
  line-height: 1;
  @media (max-width: 900px) {
    width: 80%;
  }
`;

const DiscoverDiv = styled.div`
  font-weight: 600;
  font-size: 54px;
  margin-bottom: 20px;
`;

const QuoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  width: 80%;
`;

const ClientLogoDiv = styled.div`
  font-size: 16px;
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 15px;
  flex-wrap: wrap;
`;

export { MainDiv, ClientLogoDiv, DiscoverDiv, QuoteDiv, TitleButtonDiv };
