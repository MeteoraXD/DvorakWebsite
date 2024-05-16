import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 100px;
  background-color: #b6b6b61f;
  margin-top: 450px;

  @media (max-width: 767px) {
    margin-top: 550px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
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
    text-align: start;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    align-items: center; /* Center align on small screens */
    text-align: center;
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

  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`;

const InformationDiv = styled.div`
  text-align: center;

  h1 {
    font-weight: 550;
    font-size: 24px;
  }

  p {
    margin: 0.5rem 0;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    align-items: start;
  }

  @media (max-width: 767px) {
    display: flex; /* Use flexbox on small screens */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center align items */
  }
`;

export { FooterDiv, WorkingHoursDiv, SocialsDiv, InformationDiv };
