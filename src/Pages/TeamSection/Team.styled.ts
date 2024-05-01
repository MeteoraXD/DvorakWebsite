import styled from "styled-components";

const MainTeamDiv = styled.div`
    width: 100%;
    margin: 200px 0;
`;

const TeamTitleDiv = styled.div`
    margin-bottom: 40px;
    text-align: center;
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Quote = styled.div`
    font-size: 24px;
    width: 60%;
    margin: 0 auto;
`;

const TeamCardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px; 
`;

const MemberDiv = styled.div`
    width: calc(20% - 20px); 
    text-align: center;
`;

const PhotoDiv = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`;

const NameDiv = styled.div`
    font-weight: bold;
    margin-top: 10px;
`;

const RoleDiv = styled.div`
    margin-top: 5px;
`;

export {  MainTeamDiv , TeamTitleDiv , Title , Quote , TeamCardDiv , MemberDiv, PhotoDiv , NameDiv , RoleDiv  };
