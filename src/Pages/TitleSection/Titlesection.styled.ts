import styled from "styled-components";
import BackgroundImage from '../../assets/Background.jpg'
const ImageDiv = styled.div`
    background-image: url(${BackgroundImage});
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const TitleDiv = styled.div`
    font-weight: bold;
    font-size: 36px;
`;
const QuoteDiv = styled.div`
    font-size: 22px;
display: flex;
    align-content: center;
    span{
        font-weight: bold;
        margin : 0 10px ;
        padding: 0;
    }
`;

export { ImageDiv , TitleDiv, QuoteDiv }