import styled from "styled-components";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    padding: 5rem 4rem;
    justify-content: space-between;
    min-height: 100vh;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        padding: 3rem 2rem;
        min-height: auto;
    }
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 900px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

const ImagineDiv = styled.div`
    font-weight: 600;
    font-size: 84px;
    line-height: 1;
    width: 75%;

    @media (max-width: 900px) {
        font-size: 8vw;
        width: 100%;
    }
`;

const ParaphraseDiv = styled.div`
    font-size: 16px;
    padding: 2vw 0;
    text-align: justify;
    width: 80%;

    @media (max-width: 900px) {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 4vw 0;
    }
`;

const ExploreButton = styled.button`

    padding: 1rem;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-size: clamp(14px, 0.125vw + 13.6px, 16px);
    max-width: 250px;
`;

const LogoContainer = styled.div`
    position: relative;
    width: 50vw;
    height: 40vw;
    flex: 0 0 50%;
    max-width: 50%;
    overflow: hidden;

    @media (max-width: 900px) {
        width: 80vw;
        height: 64vw;
        max-width: 100%;
        flex: 0 0 auto;
        margin-bottom: 4vw;
    }

    @media (max-width: 768px) {
        width: 85vw;
        height: 68vw;
    }
`;

const LogoDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const ColoredLogoDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    clip-path: inset(100% 0 0 0);
    transition: clip-path 1.2s ease-in-out;

    ${LogoContainer}:hover & {
        clip-path: inset(0 0 0 0);
    }
`;

export {
    StyledMainDiv,
    TextDiv,
    ImagineDiv,
    LogoDiv,
    ParaphraseDiv,
    ExploreButton,
    ColoredLogoDiv,
    LogoContainer,
};