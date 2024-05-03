import  { useState } from "react";
import {
    MainDiv,
    SmallTitleDiv,
    TitleDiv,
    BoldTitleDiv,
    LogoDiv,
    ServiceLogo,
} from "./Services.styled.ts";
import SlackLogo from "../../assets/ServiceLogo/slacklogo.svg";
import PythonLogo from "../../assets/ServiceLogo/pythonglogo.svg";
import ReactLogo from "../../assets/ServiceLogo/reactlogo.svg";
import FlutterLogo from "../../assets/ServiceLogo/flutterlofo.svg";
import ClickUpLogo from "../../assets/ServiceLogo/clickuplogo.svg";
import Aws from "../../assets/ServiceLogo/aws-brown.svg";
import Pytorch from "../../assets/ServiceLogo/pytorch-brown.svg";
import GoogleCloud from "../../assets/ServiceLogo/gcp-brown.svg";
import TensorFlow from "../../assets/ServiceLogo/tensorflow-brown.svg";
import Mongodb from "../../assets/ServiceLogo/mongo-brown.svg";
import FigmaLogo from "../../assets/ServiceLogo/figmalogo.svg";
import AwsColoredLogo from "../../assets/colorfullogo/aws-colorful.svg";
import ReactColored from "../../assets/colorfullogo/react-colored.svg";
import FlutterColored from "../../assets/colorfullogo/flutter-colorful.svg";
import PytorchColored from "../../assets/colorfullogo/pytorch-colored.svg";
import FigmaColored from "../../assets/colorfullogo/figma-colorful.svg";
import SlackColored from "../../assets/colorfullogo/slack-colored.svg";
import ClickUpColored from "../../assets/colorfullogo/clickup-colorful.svg";
import PythonColored from "../../assets/colorfullogo/python-colorful.svg";
import GCPColored from "../../assets/colorfullogo/gcp-colorful.svg";
import MongodbColored from "../../assets/colorfullogo/mongo-colorful.svg";
import TensorFlowColored from "../../assets/colorfullogo/tensorflow-colorful.svg";
import OurServices from "./OurServices.tsx";

const Services = () => {
    const [isReactHovered, setIsReactHovered] = useState(false);
    const [isFlutterHovered, setIsFlutterHovered] = useState(false);
    const [isPythonHovered, setIsPythonHovered] = useState(false);
    const [isFigmaHovered, setIsFigmaHovered] = useState(false);
    const [isSlackHovered, setIsSlackHovered] = useState(false);
    const [isClickupHovered, setIsClickupHovered] = useState(false);
    const [isAwsHovered, setIsAwsHovered] = useState(false);
    const [isPytorchHovered, setIsPytorchHovered] = useState(false);
    const [isGoogleCloudHovered, setIsGoogleCloudHovered] = useState(false);
    const [isTensorFlowHovered, setIsTensorFlowHovered] = useState(false);
    const [isMongodbHovered, setIsMongodbHovered] = useState(false);

    return (
        <MainDiv>
            <TitleDiv>
                <SmallTitleDiv>Our Services</SmallTitleDiv>
                <BoldTitleDiv>
                    A world filled with boundless opportunities and endless potential
                </BoldTitleDiv>
                <LogoDiv>
                    <ServiceLogo
                        src={isReactHovered ? ReactColored : ReactLogo}
                        onMouseEnter={() => setIsReactHovered(true)}
                        onMouseLeave={() => setIsReactHovered(false)}
                    />
                    <ServiceLogo
                        src={isFlutterHovered ? FlutterColored : FlutterLogo}
                        onMouseEnter={() => setIsFlutterHovered(true)}
                        onMouseLeave={() => setIsFlutterHovered(false)}
                    />
                    <ServiceLogo
                        src={isPythonHovered ? PythonColored : PythonLogo}
                        onMouseEnter={() => setIsPythonHovered(true)}
                        onMouseLeave={() => setIsPythonHovered(false)}
                    />
                    <ServiceLogo
                        src={isFigmaHovered ? FigmaColored : FigmaLogo}
                        onMouseEnter={() => setIsFigmaHovered(true)}
                        onMouseLeave={() => setIsFigmaHovered(false)}
                    />
                    <ServiceLogo
                        src={isSlackHovered ? SlackColored : SlackLogo}
                        onMouseEnter={() => setIsSlackHovered(true)}
                        onMouseLeave={() => setIsSlackHovered(false)}
                    />
                    <ServiceLogo
                        src={isClickupHovered ? ClickUpColored : ClickUpLogo}
                        onMouseEnter={() => setIsClickupHovered(true)}
                        onMouseLeave={() => setIsClickupHovered(false)}
                    />
                    <ServiceLogo
                        src={isAwsHovered ? AwsColoredLogo : Aws}
                        onMouseEnter={() => setIsAwsHovered(true)}
                        onMouseLeave={() => setIsAwsHovered(false)}
                    />
                    <ServiceLogo
                        src={isPytorchHovered ? PytorchColored : Pytorch}
                        onMouseEnter={() => setIsPytorchHovered(true)}
                        onMouseLeave={() => setIsPytorchHovered(false)}
                    />
                    <ServiceLogo
                        src={isGoogleCloudHovered ? GCPColored : GoogleCloud}
                        onMouseEnter={() => setIsGoogleCloudHovered(true)}
                        onMouseLeave={() => setIsGoogleCloudHovered(false)}
                    />
                    <ServiceLogo
                        src={isTensorFlowHovered ? TensorFlowColored : TensorFlow}
                        onMouseEnter={() => setIsTensorFlowHovered(true)}
                        onMouseLeave={() => setIsTensorFlowHovered(false)}
                    />
                    <ServiceLogo
                        src={isMongodbHovered ? MongodbColored : Mongodb}
                        onMouseEnter={() => setIsMongodbHovered(true)}
                        onMouseLeave={() => setIsMongodbHovered(false)}
                    />
                </LogoDiv>
            </TitleDiv>
            <OurServices/>
        </MainDiv>
    );
};

export default Services;
