import { useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const logos = [
    { regular: ReactLogo, colored: ReactColored },
    { regular: FlutterLogo, colored: FlutterColored },
    { regular: PythonLogo, colored: PythonColored },
    { regular: FigmaLogo, colored: FigmaColored },
    { regular: SlackLogo, colored: SlackColored },
    { regular: ClickUpLogo, colored: ClickUpColored },
    { regular: Aws, colored: AwsColoredLogo },
    { regular: Pytorch, colored: PytorchColored },
    { regular: GoogleCloud, colored: GCPColored },
    { regular: TensorFlow, colored: TensorFlowColored },
    { regular: Mongodb, colored: MongodbColored },
  ];

  return (
    <MainDiv>
      <TitleDiv>
        <SmallTitleDiv>Our Services</SmallTitleDiv>
        <BoldTitleDiv>
          A world filled with boundless opportunities and endless potential
        </BoldTitleDiv>
        <LogoDiv>
          {logos.map((logo, index) => (
            <ServiceLogo
              key={index}
              src={hoveredIndex === index ? logo.colored : logo.regular}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </LogoDiv>{" "}
      </TitleDiv>
      <OurServices />
    </MainDiv>
  );
};

export default Services;
