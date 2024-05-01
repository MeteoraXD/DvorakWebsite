import styled from "styled-components";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
    padding: 5vw;
    justify-content: space-between;

    @media (max-width: 768px) {
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
    font-size: 8vw;
    line-height: 1;
    .del {
        font-weight: bold;
    }

    @media (max-width: 768px) {
        font-size: 10vw;
    }
`;

const ParaphraseDiv = styled.div`
    font-size: 1.5vw;
    padding: 2vw 0;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 3vw;
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
