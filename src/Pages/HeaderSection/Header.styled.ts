import styled from "styled-components";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
    padding: 5vw;
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
    width : 75%;
    .del {
        font-weight: bold;
    }

    @media (max-width: 900px) {
        font-size: 10vw;
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
    width: 10vw;
    height: 6vw;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5vw;

    @media (max-width: 768px) {
        width: 20vw;
        height: 10vw;
        font-size: 3vw;
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
