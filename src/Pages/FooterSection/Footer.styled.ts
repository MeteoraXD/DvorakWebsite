import styled from "styled-components";

const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #B6B6B61F;
    margin-top: 100px;
`;

const WorkingHoursDiv = styled.div``;

const SocialsDiv = styled.div`
    display: flex;
    flex-direction: column;
    a{
        color: black;
    }
`;

const InformationDiv = styled.div``;

export {  FooterDiv , WorkingHoursDiv , SocialsDiv , InformationDiv }