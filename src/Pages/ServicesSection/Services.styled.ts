import styled from "styled-components";

const MainDiv  = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 140px;
`;

const TitleDiv  = styled.div`
        display: flex;
    flex-direction: column;
align-items: center;
    text-align: center;
    width: 60%;
`;

const SmallTitleDiv = styled.div`
    font-size: 24px;
`;
const BoldTitleDiv = styled.div`
    font-weight: 600;
    margin-top: 50px;
    font-size: 80px;
    line-height: 1;
`;

const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap : 50px ;
    padding: 20px;
    background-color: black;
    margin-top: 100px;
    
`;
const ServiceLogo = styled.img``;

//Second Part CSS

const OurServiceDiv = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; /* Align items to the start */
    gap: 100px;
    padding: 40px;
    margin-left: 30px /* Align to the center */
`;

const TextButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the start */
    width: 60%; /* Adjust width */
`;

const OurServiceTitle = styled.div`
    font-weight: 600;
    font-size: 36px; /* Reduce font size */
    margin-bottom: 20px;
    white-space: nowrap;
    
`;

const OurServiceExplain = styled.div`
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
    margin-bottom: 20px; /* Add margin bottom for spacing */
`;

const Divider = styled.hr`
    background-color:  #4747471a;
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


export { MainDiv, TitleDiv, Divider ,SmallTitleDiv, BoldTitleDiv , TextButtonContainer , LogoDiv , ServiceLogo , OurServiceDiv , OurServiceTitle , OurServiceExplain , GetStartedButton};
