import styled from "styled-components";

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

const PictureText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    font-size: 3vw;

    @media (min-width: 768px) {
        font-size: 40px;
    }
`;

const PictureSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px; 
    gap: 20px;
    opacity: 80%;
    position: relative;
    
   
`;

const HeaderPicture = styled.img`
    height: 400px;
    width: 300px;
    position: relative;
    
    @media (max-width: 768px) {
       
    }
`;

const ProjectsPicture = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Picture = styled.img`
    height: 10vw;
    width: 10vw; 

    @media (min-width: 768px) {
        height: 50px;
        width: 50px;
    }
`;

export { Container, PictureText, ProjectsPicture, Picture, Title, Services, PictureSection, HeaderPicture };
