import { useState } from "react";
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
          “Starting my role as a WordPress administrator has been a joy, thanks
          to its intuitive interface, media management, security, and plugin
          integration, making website management a breeze.”
        </Quote>
      </TeamTitleDiv>

      <TeamCardDiv>
        <MemberButtonContainer>
          <MemberContainer>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Eng. Bishnu Sharma</NameDiv>
              <RoleDiv>Technical Lead (CF)</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Dhiraj Pahari</NameDiv>
              <RoleDiv>Executive Head (CF)</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Sushish Baral</NameDiv>
              <RoleDiv>Data Scientist (CF)</RoleDiv>
            </MemberDiv>
          </MemberContainer>
        </MemberButtonContainer>
        {expanded && (
          <HiddenContainer className={expanded ? "expanded" : "collapsed"}>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Milan Gurung</NameDiv>
              <RoleDiv>Front-end Developer</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Gaurav Acharya</NameDiv>
              <RoleDiv>Back-end Developer</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Milan Tilija</NameDiv>
              <RoleDiv>Mobile Developer</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Prabin Gurung</NameDiv>
              <RoleDiv>UI/UX</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Navaraj</NameDiv>
              <RoleDiv>Intern (FrontEnd)</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Megha Gurung</NameDiv>
              <RoleDiv>Intern (FrontEnd)</RoleDiv>
            </MemberDiv>
            <MemberDiv>
              <PhotoDiv src={Picture} />
              <NameDiv>Sahaz Gurung</NameDiv>
              <RoleDiv>Intern (Graphics Designer)</RoleDiv>
            </MemberDiv>
          </HiddenContainer>
        )}
        <ExpandButton onClick={handleExpand}>
          {expanded ? (
            <img src={UpArrow} alt="up" />
          ) : (
            <img src={DownArrow} alt="down" />
          )}{" "}
        </ExpandButton>
      </TeamCardDiv>
    </MainTeamDiv>
  );
};

export default Team;
