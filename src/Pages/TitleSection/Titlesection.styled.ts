import styled from "styled-components";
import BackgroundImage from "../../assets/background.jpeg";

const ImageDiv = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    @media (max-width: 900px) {
        min-height: 500px;
        height: auto;
        padding: 4rem 2rem;
        background-attachment: scroll;
    }
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    max-width: 1200px;
    width: 100%;
`;

const TitleDiv = styled.div`
    font-weight: 600;
    font-size: clamp(2rem, 6vw, 6rem);
    text-align: center;
    margin-bottom: 1rem;
    width: 100%;
`;

const QuoteDiv = styled.div`
    font-size: clamp(0.875rem, 1.5vw, 1.125rem);
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;

    span {
        font-weight: bold;
        margin: 0 0.25rem;
        padding: 0;
    }
`;

export {ImageDiv, TitleDiv, QuoteDiv, TextDiv};