import {useState} from "react";
import {
    MainTeamDiv,
    TeamTitleDiv,
    Title,
    Quote,
    TeamCardDiv,
    MemberDiv,
    PhotoDiv,
    NameDiv,
    RoleDiv,
    ExpandButton,
    MemberButtonContainer,
    MemberContainer,
    HiddenContainer,
} from "./Team.styled";
import Picture from "../../assets/pfp.jpg";
import UpArrow from "../../assets/uparrow.svg";
import DownArrow from "../../assets/downarrow.svg";

const Team = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <MainTeamDiv>
            <TeamTitleDiv>
                <Title>People Behind</Title>
                <Quote>
                    The strength of Dvorak Innovation comes from a team that blends engineering excellence, creative
                    thinking, and a shared passion for problem-solving. Every product we build is shaped by people who
                    care deeply about quality, collaboration, and innovation.

                </Quote>
            </TeamTitleDiv>

            <TeamCardDiv>
                <MemberButtonContainer>
                    <MemberContainer>

                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Dhiraj Pahari</NameDiv>
                            <RoleDiv>Executive Head (CF)</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Sushish Baral</NameDiv>
                            <RoleDiv>Data Scientist (CF)</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Er. Bishnu Sharma</NameDiv>
                            <RoleDiv>Technical Lead (CF)</RoleDiv>
                        </MemberDiv>
                    </MemberContainer>
                </MemberButtonContainer>
                {expanded && (
                    <HiddenContainer className={expanded ? "expanded" : "collapsed"}>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Milan Gurung</NameDiv>
                            <RoleDiv>Front-end Developer</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Gaurab Acharya</NameDiv>
                            <RoleDiv>Back-end Developer</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Milan Tilija</NameDiv>
                            <RoleDiv>Mobile Developer</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Prabin Gurung</NameDiv>
                            <RoleDiv>UI/UX Designer</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Sanjay Pahari</NameDiv>
                            <RoleDiv>Front-end Developer</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Nisha Godar</NameDiv>
                            <RoleDiv>Admin Hr</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Ashish Gurung</NameDiv>
                            <RoleDiv>Videographer & Editor</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Alisa Sharma</NameDiv>
                            <RoleDiv>Front-end Developer</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Jayan Adhikari</NameDiv>
                            <RoleDiv>AI </RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Abinash Basnet</NameDiv>
                            <RoleDiv>AI</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Aasupa Baral</NameDiv>
                            <RoleDiv>AI</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Subash Poudel</NameDiv>
                            <RoleDiv>AI</RoleDiv>
                        </MemberDiv>
                        <MemberDiv>
                            <PhotoDiv src={Picture}/>
                            <NameDiv>Amisha Gurung</NameDiv>
                            <RoleDiv>Quality Assurance</RoleDiv>
                        </MemberDiv><MemberDiv>
                        <PhotoDiv src={Picture}/>
                        <NameDiv>Muna Tamang</NameDiv>
                        <RoleDiv>AI</RoleDiv>
                    </MemberDiv>
                    </HiddenContainer>
                )}
                <ExpandButton onClick={handleExpand}>
                    {expanded ? (
                        <img src={UpArrow} alt="up"/>
                    ) : (
                        <img src={DownArrow} alt="down"/>
                    )}{" "}
                </ExpandButton>
            </TeamCardDiv>
        </MainTeamDiv>
    );
};

export default Team;
