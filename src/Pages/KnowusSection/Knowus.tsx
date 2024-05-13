import {
  Container,
  Title,
  Services,
  ProjectName,
  ProjectDescriptioncontainer,
  ProjectDomain,
  ProjectDescription,
  HeaderPictureContainer,
  PictureSection,
  PictureText,
  Picture,
  ProjectsPicture,
  HeaderPicture,
  OverlayDiv,
} from "./KnowUs.styled";

import Revel from "../../assets/OurServicesPicture/crowd.jpg";
import Academics from "../../assets/OurServicesPicture/acadenics.jpg";
import Hospitality from "../../assets/OurServicesPicture/hospitality.jpg";
import RealEstate from "../../assets/OurServicesPicture/realestate.jpg";
import PlaceholderPicture from "../../assets/OurServicesPicture/projectpicture.jpg";

const KnowUs = () => {
  return (
    <Container>
      <Title>Get to know us!</Title>
      <Services>
        <PictureSection>
          <HeaderPictureContainer>
            <OverlayDiv />

            <HeaderPicture src={Revel} />
            <PictureText>Revel</PictureText>
          </HeaderPictureContainer>

          <ProjectsPicture>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
          </ProjectsPicture>
        </PictureSection>
        <PictureSection>
          <HeaderPictureContainer>
            <OverlayDiv />
            <HeaderPicture src={Hospitality} />
            <PictureText>Hospitality</PictureText>
          </HeaderPictureContainer>

          <ProjectsPicture>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>Hotel Mountain View</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>Hotel Snow Peak</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
          </ProjectsPicture>
        </PictureSection>
        <PictureSection>
          <HeaderPictureContainer>
            <OverlayDiv />

            <HeaderPicture src={RealEstate} />
            <PictureText>RealEstate</PictureText>
          </HeaderPictureContainer>

          <ProjectsPicture>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
          </ProjectsPicture>
        </PictureSection>
        <PictureSection>
          <HeaderPictureContainer>
            <OverlayDiv />
            <HeaderPicture src={Academics} />
            <PictureText>Academics</PictureText>
          </HeaderPictureContainer>

          <ProjectsPicture>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
            <ProjectDescription>
              <Picture src={PlaceholderPicture} />
              <ProjectDescriptioncontainer>
                <ProjectName>A</ProjectName>
                <ProjectDomain>www.abc.com</ProjectDomain>
              </ProjectDescriptioncontainer>
            </ProjectDescription>
          </ProjectsPicture>
        </PictureSection>
      </Services>
    </Container>
  );
};

export default KnowUs;
