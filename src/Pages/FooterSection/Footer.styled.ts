import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center; 
  padding: 20px 100px; 
  background-color: #b6b6b61f;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
    flex-direction: column;
    align-items: center; 
  }

  @media (min-width: 768px) {
    justify-content: space-between; /
    align-items: flex-start; 
  }
`;

const WorkingHoursDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h1 {
    font-weight: 550;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const SocialsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    font-weight: 550;
    font-size: 24px;
  }
  a {
    color: black;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const InformationDiv = styled.div`
  text-align: center;
  h1 {
    font-weight: 550;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export { FooterDiv, WorkingHoursDiv, SocialsDiv, InformationDiv };
