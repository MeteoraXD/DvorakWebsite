
import styled from "styled-components";

const HeaderPictureContainer = styled.div`
    position: relative;
`;

const ExpandButton = styled.button`
    margin-top: 10px;
    z-index: 2;
    cursor: pointer;
    background: none;
    border: none;
    opacity: 0;
    color: black;
    transition: opacity 0.3s ease;
`;

const PictureSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    cursor: pointer;

    &:hover {
        ${ExpandButton} {
            opacity: 1;
        }
    }
`;

const ProjectsPicture = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding-top: 10px;
`;

const ProjectDescription = styled.div`
display: flex;
    flex-direction: row;
    gap: 40px;
`;
const Picture = styled.img`
    height: 10vw;
    width: 10vw;

    @media (min-width: 768px) {
        height: 50px;
        width: 50px;
    }
`;
const ProjectName = styled.h4`

`;

const ProjectDomain = styled.p``;

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
        align-items: center;
    }
`;
const  ProjectDescriptioncontainer = styled.div`
display: flex;
    flex-direction: column;
    gap : 0;

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

export { Container, ProjectDescriptioncontainer ,ProjectName, ProjectDomain ,ProjectDescription , PictureText, Picture, Title, Services, PictureSection, HeaderPicture, ExpandButton, ProjectsPicture, HeaderPictureContainer };