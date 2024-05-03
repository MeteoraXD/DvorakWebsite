import { useState } from "react";
import { Container, Title, Services,  ProjectName,ProjectDescriptioncontainer, ProjectDomain ,ProjectDescription ,  HeaderPictureContainer ,PictureSection, PictureText, Picture, ProjectsPicture, HeaderPicture, ExpandButton } from "./KnowUs.styled";

import Revel from "../../assets/OurServicesPicture/crowd.jpg";
import Academics from "../../assets/OurServicesPicture/acadenics.jpg";
import Hospitality from "../../assets/OurServicesPicture/hospitality.jpg";
import RealEstate from "../../assets/OurServicesPicture/realestate.jpg";
import PlaceholderPicture from "../../assets/OurServicesPicture/projectpicture.jpg";

interface ExpandedSectionsState {
    revel: boolean;
    hospitality: boolean;
    realEstate: boolean;
    academics: boolean;
}
const KnowUs = () => {
    const [expandedSections, setExpandedSections] = useState<ExpandedSectionsState>({
        revel: false,
        hospitality: false,
        realEstate: false,
        academics: false,
    });

    const toggleExpand = (sectionName: keyof ExpandedSectionsState) => {
        setExpandedSections((prevState: ExpandedSectionsState) => ({
            ...prevState,
            [sectionName]: !prevState[sectionName],
        }));
    };

    return (
        <Container>
            <Title>Get to know us!</Title>
            <Services>
                <PictureSection>
                    <HeaderPictureContainer>
                        <HeaderPicture src={Revel} />
                        <PictureText>Revel</PictureText>
                    </HeaderPictureContainer>
                    <ExpandButton onClick={() => toggleExpand("revel")}>
                        {expandedSections.revel ? "Collapse" : "Click To Expand"}
                    </ExpandButton>
                    {expandedSections.revel && (
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
                    )}
                </PictureSection>
                <PictureSection>
                    <HeaderPictureContainer>
                    <HeaderPicture src={Hospitality} />
                    <PictureText>Hospitality</PictureText>
                    </HeaderPictureContainer>
                    <ExpandButton onClick={() => toggleExpand("hospitality")}>
                        {expandedSections.hospitality ? "Collapse" : "Click To Expand"}
                    </ExpandButton>
                    {expandedSections.hospitality && (
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
                    )}
                </PictureSection>
                <PictureSection>
                    <HeaderPictureContainer>

                    <HeaderPicture src={RealEstate} />
                    <PictureText>RealEstate</PictureText>
                    </HeaderPictureContainer>
                    <ExpandButton onClick={() => toggleExpand("realEstate")}>
                        {expandedSections.realEstate ? "Collapse" : "Click To Expand"}
                    </ExpandButton>
                    {expandedSections.realEstate && (
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
                        </ProjectsPicture>                    )}
                </PictureSection>
                <PictureSection>
                    <HeaderPictureContainer>
                    <HeaderPicture src={Academics} />
                    <PictureText>Academics</PictureText>
                    </HeaderPictureContainer>
                    <ExpandButton onClick={() => toggleExpand("academics")}>
                        {expandedSections.academics ? "Collapse" : "Click To Expand"}
                    </ExpandButton>
                    {expandedSections.academics && (
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
                        </ProjectsPicture>                    )}
                </PictureSection>
            </Services>
        </Container>
    );
};

export default KnowUs;