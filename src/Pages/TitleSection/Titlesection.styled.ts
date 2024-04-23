import styled from "styled-components";
import BackgroundImage from '../../assets/Background.jpg'
const ImageDiv = styled.div`
    background-image: url(${BackgroundImage});
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     
`;
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
const TitleDiv = styled.div`
    font-weight: 600;
    font-size: 96px;
`;
const QuoteDiv = styled.div`
    font-size: 16px;
    display: flex;
    align-content: center;
    span{
        font-weight: bold;
        margin : 0 5px ;
        padding: 0;
    }
`;

export { ImageDiv , TitleDiv, QuoteDiv , TextDiv }