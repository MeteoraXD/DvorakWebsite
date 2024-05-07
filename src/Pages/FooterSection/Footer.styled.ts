import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #b6b6b61f;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
  }
`;

const WorkingHoursDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;

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

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export { FooterDiv, WorkingHoursDiv, SocialsDiv, InformationDiv };
