import  { useState } from "react";
import { Container, Title, Services, PictureSection, PictureText, Picture, ProjectsPicture, HeaderPicture, ExpandButton } from "./KnowUs.styled";

import Revel from "../../assets/OurServicesPicture/crowd.jpg";
import Academics from "../../assets/OurServicesPicture/acadenics.jpg";
import Hospitality from "../../assets/OurServicesPicture/hospitality.jpg";
import RealEstate from "../../assets/OurServicesPicture/realestate.jpg";
import PlaceholderPicture from "../../assets/OurServicesPicture/projectpicture.jpg";

const KnowUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Container>
            <Title>Get to know us!</Title>
            <Services>
                <PictureSection>
                    <HeaderPicture src={Revel} />
                    <PictureText>Revel</PictureText>
                    <ExpandButton onClick={toggleExpand}>Click To Expand</ExpandButton>
                    <ProjectsPicture >
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>
                <PictureSection>
                    <HeaderPicture src={Hospitality} />
                    <PictureText>Hospitality</PictureText>
                    <ExpandButton>Click To Expand</ExpandButton>
                    <ProjectsPicture>
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>
                <PictureSection>
                    <HeaderPicture src={RealEstate} />
                    <PictureText>RealEstate</PictureText>
                    <ExpandButton>Click To Expand</ExpandButton>
                    <ProjectsPicture>
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>
                <PictureSection>
                    <HeaderPicture src={Academics} />
                    <PictureText>Academics</PictureText>
                    <ExpandButton>Click To Expand</ExpandButton>
                    <ProjectsPicture>
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                        <Picture src={PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>
            </Services>
        </Container>
    );
};

export default KnowUs;
