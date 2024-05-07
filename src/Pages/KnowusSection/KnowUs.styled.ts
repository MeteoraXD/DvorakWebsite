import styled from "styled-components";

const HeaderPictureContainer = styled.div`
  position: relative;
`;

const ProjectDescription = styled.div`
  opacity: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const ProjectsPicture = styled.div`
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  padding-top: 10px;
`;
const PictureSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  cursor: pointer;
  transition: 0.5s ease-out;

  &:hover {
    ${ProjectsPicture} {
      height: 100%;
    }
    ${ProjectDescription} {
      transition: all 1s ease;
      opacity: 1;
    }
  }

  @media (max-width: 1350px) {
    align-items: center;
  }
`;

const Picture = styled.img`
  height: 10vw;
  width: 10vw;
  flex-shrink: 0; /* Prevent the image from shrinking */

  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const ProjectName = styled.h4`
  margin: 0;
`;

const ProjectDomain = styled.p`
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 5vw;
  margin: 10vw 0;

  @media (max-width: 768px) {
    font-size: 10vw;
    margin: 200px 0;
  }
`;

const Services = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 1350px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center !important;
  }
`;

const ProjectDescriptioncontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const PictureText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  font-size: 3vw;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const HeaderPicture = styled.img`
  height: 400px;
  width: 300px;
  position: relative;

  @media (max-width: 768px) {
  }
`;

export {
  Container,
  ProjectDescriptioncontainer,
  ProjectName,
  ProjectDomain,
  ProjectDescription,
  PictureText,
  Picture,
  Title,
  Services,
  PictureSection,
  HeaderPicture,
  ProjectsPicture,
  HeaderPictureContainer,
};
