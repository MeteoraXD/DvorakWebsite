import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-weight: 400;
    font-size: 70px;
`;

const Services = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`;

const PictureText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    font-size: 40px;
`;

const PictureSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    opacity: 80%;
    gap: 20px;
    position: relative; 
`;

const HeaderPicture = styled.img`
    height: 400px;
    width: 300px;
    position: relative; /* Add relative positioning to the image container */
`;

const ProjectsPicture = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const Picture = styled.img`
    height: 50px;
    width: 50px;
`;

export { Container, PictureText, ProjectsPicture, Picture, Title, Services, PictureSection, HeaderPicture };
