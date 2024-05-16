import styled, { keyframes } from "styled-components";

const expandAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainTeamDiv = styled.div`
  width: 100%;
  margin: 150px 0;
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
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ExpandButton = styled.button`
  background: none;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const MemberButtonContainer = styled.div`
  display: flex;

  justify-content: center;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HiddenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  opacity: 0;
  transform: translateY(-20px);
  animation: ${expandAnimation} 0.5s ease-in-out forwards;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MemberDiv = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  margin-bottom: 40px;
`;

const PhotoDiv = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
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
  MemberButtonContainer,
  MemberContainer,
  MemberDiv,
  PhotoDiv,
  NameDiv,
  RoleDiv,
  ExpandButton,
  HiddenContainer,
};
