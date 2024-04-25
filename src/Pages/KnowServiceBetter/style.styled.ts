import styled from "styled-components";

const StyledMainDiv = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    gap: 100px;
    padding: 40px;
`;

const StyledTitleDiv = styled.div`
    font-weight: 600;
    font-size: 54px;
    white-space: nowrap;
`;

const TextButtonContainer = styled.div`

`;

const TextContainer = styled.div`
    font-size: 16px;
    line-height: 1.5; 
    text-align: justify`;

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