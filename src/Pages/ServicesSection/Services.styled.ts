import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 140px;

    @media (max-width: 768px) {
        margin-top: 80px;
    }
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const SmallTitleDiv = styled.div`
    font-size: 24px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const BoldTitleDiv = styled.div`
    font-weight: 600;
    margin-top: 50px;
    font-size: 80px;
    line-height: 1;
    width: 60%;
    white-space: pre-wrap;

    @media (max-width: 768px) {
        font-size: 8vw;
        width: 80%;
        margin-top: 30px;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
        white-space: normal;
        width: 60%;
    }
`;

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 45px;
    padding: 20px;
    background-color: black;
    width: 100%;
    margin-top: 100px;
    overflow-x: auto !important;

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
        margin-top: 50px;
    }
`;

const ServiceLogo = styled.img`
    cursor: pointer;
    height: 80px;
    width: 80px;

    @media (max-width: 768px) {
        height: 50px;
        width: 50px;
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
        padding: 10px;
        margin-left: 20px;
    }
`;

const TextButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    @media (max-width: 900px) {
        font-size: 8vw;
        width: 100%;
    }
`;

const OurServiceTitle = styled.div`
    font-weight: 600;
    font-size: clamp(24px, 0.75vw + 21.6px, 36px);
    margin-bottom: 20px;
    white-space: normal;
    word-wrap: break-word;
    min-width: 400px;
    max-width: 400px;
    line-height: 1.2;
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;

    @media (max-width: 900px) {
        min-width: 100%;
        max-width: 100%;
        text-align: left;
    }

    @media (max-width: 450px) {
        font-size: 8vw;
    }
`;

const OurServiceExplain = styled.div`
    font-size: clamp(14px, 0.125vw + 13.6px, 16px);
    line-height: 1.5;
    text-align: justify;
    margin-bottom: 20px;
    @media (max-width: 900px) {
        text-align: left;
        width: 90%;
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
    font-size: 16px;
    padding: 5px 0;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.7;
    }
`;

const ExpandButton = styled.button`
    display: block;
    margin: 40px auto;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 500;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #333;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        padding: 12px 30px;
        font-size: 14px;
    }
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
    ExpandButton,
};