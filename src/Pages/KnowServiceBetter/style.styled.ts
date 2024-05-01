import styled from "styled-components";

const StyledMainDiv = styled.div`
 display: flex;
 flex-direction: row;
 gap: 100px;
 padding: 40px;
 margin: 300px 0;

 @media (max-width: 900px) {
  flex-direction: column;
  gap: 20px;
 }
`;

const StyledTitleDiv = styled.div`
 font-weight: 600;
 font-size: 54px;
 white-space: nowrap;

 @media (max-width: 768px) {
  font-size: 6vw;
  margin-bottom: 0;
 }
`;

const TextButtonContainer = styled.div``;

const TextContainer = styled.div`
 font-size: 16px;
 line-height: 1.5;
 text-align: justify;
`;

const StyledButton = styled.button`
 height: 60px;
 border: none;
 cursor: pointer;
 margin-top: 20px;
 font-size: 16px;
 padding: 0 20px;
 background: black;
`;

export { StyledMainDiv, StyledTitleDiv, TextButtonContainer, TextContainer , StyledButton};