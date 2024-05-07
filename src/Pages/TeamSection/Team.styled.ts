import styled from "styled-components";

const MainTeamDiv = styled.div`
  width: 100%;
  margin: 100px 0;
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
  justify-content: center;
  gap: 20px;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MemberDiv = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 850px) {
    max-width: none;
  }
`;

const PhotoDiv = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const NameDiv = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const RoleDiv = styled.div`
  margin-top: 5px;
`;

export {
  MainTeamDiv,
  TeamTitleDiv,
  Title,
  Quote,
  TeamCardDiv,
  MemberDiv,
  PhotoDiv,
  NameDiv,
  RoleDiv,
};
