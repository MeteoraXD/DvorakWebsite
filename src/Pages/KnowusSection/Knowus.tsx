import {  PictureSection , PictureText ,Picture ,ProjectsPicture ,Services , Container , Title , HeaderPicture} from "./KnowUs.styled.ts";

import Revel from "../../assets/OurServicesPicture/crowd.jpg"
import Academics from "../../assets/OurServicesPicture/acadenics.jpg"
import Hospitality from "../../assets/OurServicesPicture/hospitality.jpg"
import RealEstate from "../../assets/OurServicesPicture/realestate.jpg"
import PlaceholderPicture from  "../../assets/OurServicesPicture/projectpicture.jpg"
const KnowUs = () => {

    return (
        <Container>
            <Title>Get to know us!</Title>
            <Services>
                <PictureSection>
                    <HeaderPicture src = { Revel} />
                    <PictureText> Revel </PictureText>
                    <ProjectsPicture>
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>
                <PictureSection>
                    <HeaderPicture src = { Hospitality} />
                    <PictureText> Hospitality </PictureText>

                    <ProjectsPicture>
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>
                <PictureSection>
                    <HeaderPicture src = { RealEstate} />
                    <PictureText> RealEstate </PictureText>

                    <ProjectsPicture>
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>
                <PictureSection>
                    <HeaderPicture src = { Academics} />
                    <PictureText> Academics </PictureText>

                    <ProjectsPicture>
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                        <Picture src = { PlaceholderPicture} />
                    </ProjectsPicture>
                </PictureSection>

            </Services>
        </Container>
    )

}

export default KnowUs;