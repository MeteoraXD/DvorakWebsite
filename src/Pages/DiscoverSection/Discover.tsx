import {
  MainDiv,
  TitleButtonDiv,
  QuoteDiv,
  ClientLogoDiv,
  DiscoverDiv,
} from "./Discover.styled.ts";
import { ServiceLogo } from "../ServicesSection/Services.styled.ts";
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
const Discover = () => {
  return (
    <MainDiv>
      <TitleButtonDiv>
        <DiscoverDiv>Our Trusted Clients</DiscoverDiv>
      </TitleButtonDiv>
      <QuoteDiv>
        <ClientLogoDiv>
          <ServiceLogo src={SlackLogo} />
          <ServiceLogo src={PythonLogo} />
          <ServiceLogo src={ReactLogo} />
          <ServiceLogo src={FlutterLogo} />
          <ServiceLogo src={Aws} />
          <ServiceLogo src={GoogleCloud} />
          <ServiceLogo src={TensorFlow} />
          <ServiceLogo src={FigmaLogo} />
          <ServiceLogo src={Mongodb} />
          <ServiceLogo src={Pytorch} />
          <ServiceLogo src={ClickUpLogo} />
        </ClientLogoDiv>
      </QuoteDiv>
    </MainDiv>
  );
};
export default Discover;
