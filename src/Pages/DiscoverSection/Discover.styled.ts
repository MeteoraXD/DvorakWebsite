import styled from "styled-components";

 const MainDiv = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     padding: 40px;
     gap: 100px;
 `;

 const  TitleButtonDiv = styled.div`
    width: 60%;
     line-height: 1;
 `;

 const DiscoverDiv = styled.div`
     font-weight: 600;
     font-size: 54px;
     margin-bottom: 20px;
 `;

 const ButtonSection = styled.button`
     width: 100px;
     height: 60px;
     background-color: black;
     border: none;
     cursor: pointer;
     margin-top: 20px;
 `;

 const QuoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start */
  width: 60%;
 `;

 const ParaphraseDiv = styled.div`
    font-size: 16px;
 `;




export { MainDiv , ParaphraseDiv , DiscoverDiv , QuoteDiv , ButtonSection, TitleButtonDiv };