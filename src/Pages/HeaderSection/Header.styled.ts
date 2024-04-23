import styled from "styled-components";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
padding: 40px ;    
`;

const TextDiv = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    
`;
const ImagineDiv = styled.div` 
    font-weight: 600;
    font-size: 120px;
    line-height: 110px;
    .del{
        font-weight: bold;
    }
`;
const ParaphraseDiv = styled.div`
    font-size: 16px;
    padding: 20px 0;
    text-align: justify;
`;
const ExploreButton = styled.button`
    width: 100px;
    height: 60px;
    background-color: black;
    border: none;
    cursor: pointer;
`;

const LogoDiv = styled.img`
    height: 700px;
`;


export {
    StyledMainDiv,
    TextDiv,
    ImagineDiv,
    LogoDiv,
    ParaphraseDiv,
    ExploreButton,
}
