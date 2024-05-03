import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 140px;
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const SmallTitleDiv = styled.div`
    font-size: 24px;
`;
const BoldTitleDiv = styled.div`
    font-weight: 600;
    margin-top: 50px;
    font-size: 80px;
    line-height: 1;
    width: 60%;
    @media (max-width: 768px) {
        font-size: 10vw;
    }
`;

const LogoDiv = styled.div`
    display: flex;
    justify-content: center; /* Align logos horizontally center */
    gap: 50px;
    padding: 20px;
    background-color: black;
    width: 100%; 
    margin-top: 100px;
    overflow: hidden;
    @media (max-width: 768px) {
        gap: 1.3rem;
        overflow: hidden;
    }
`;
const ServiceLogo = styled.img`
    cursor: pointer;
    height: 80px;
    width: 80px;

    @media (max-width: 768px) {
        height: auto;
    }
`;

//Second Part CSS

const OurServiceDiv = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 100px;
    padding: 40px;
    margin-left: 30px;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
`;

const TextButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    @media (max-width: 900px) {
        font-size: 10vw;
        width: 100%;
    }
`;

const OurServiceTitle = styled.div`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 20px;
    white-space: nowrap;
`;

const OurServiceExplain = styled.div`
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
    margin-bottom: 20px;
    @media (max-width: 900px) {
        font-size: 2.5vw;
    }
`;

const Divider = styled.hr`
    background-color: #4747471a;
    width: 90%;
`;

const GetStartedButton = styled.button`
    border: none;
    border-bottom: 1px solid black;
    background-color: white;
    color: black;
    cursor: pointer;
    margin-top: 20px;
`;

export {
    MainDiv,
    TitleDiv,
    Divider,
    SmallTitleDiv,
    BoldTitleDiv,
    TextButtonContainer,
    LogoDiv,
    ServiceLogo,
    OurServiceDiv,
    OurServiceTitle,
    OurServiceExplain,
    GetStartedButton,
};
