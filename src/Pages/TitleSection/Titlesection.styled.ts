import styled from "styled-components";
import BackgroundImage from '../../assets/Background.jpg';

const ImageDiv = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: 40vh;
    }
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleDiv = styled.div`
    font-weight: 600;
    font-size: 6vw; 
    text-align: center;

    @media (max-width: 768px) {
        font-size: 10vw; 
    }
`;

const QuoteDiv = styled.div`
    font-size: 1vw;
    display: flex;
    align-content: center;
    justify-content: center;

    span {
        font-weight: bold;
        margin: 0 0.5vw; 
        padding: 0;
        
    }

    @media (max-width: 768px) {
        font-size: 2.2vw; 
        
        
    }
`;

export { ImageDiv, TitleDiv, QuoteDiv, TextDiv };
