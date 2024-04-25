import {MainDiv, SmallTitleDiv, TitleDiv, BoldTitleDiv, LogoDiv, ServiceLogo} from "./Services.styled.ts";
import SlackLogo from "../../assets/ServiceLogo/slacklogo.svg"
import PythonLogo from "../../assets/ServiceLogo/pythonglogo.svg"
import ReactLogo from "../../assets/ServiceLogo/reactlogo.svg"
import FlutterLogo from "../../assets/ServiceLogo/flutterlofo.svg"
import ClickupLogo from "../../assets/ServiceLogo/clickuplogo.svg"
import FigmaLogo from "../../assets/ServiceLogo/figmalogo.svg"
import OurServices from "./OurServices.tsx";

const Services = () => {
return (
    <MainDiv>
        <TitleDiv>
            <SmallTitleDiv>Our Services</SmallTitleDiv>
            <BoldTitleDiv>A world filled with boundless opportunities and endless potential</BoldTitleDiv>
        <LogoDiv>
            <ServiceLogo src = { ReactLogo } ></ServiceLogo>
            <ServiceLogo src = { FlutterLogo } ></ServiceLogo>
            <ServiceLogo src = { PythonLogo } ></ServiceLogo>
            <ServiceLogo src = { FigmaLogo } ></ServiceLogo>
            <ServiceLogo src = { SlackLogo } ></ServiceLogo>
            <ServiceLogo src = { ClickupLogo } ></ServiceLogo>
        </LogoDiv>

        </TitleDiv>
        <OurServices/>
    </MainDiv>
)
}

export default Services;