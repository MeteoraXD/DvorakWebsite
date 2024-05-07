import {
  FooterDiv,
  InformationDiv,
  SocialsDiv,
  WorkingHoursDiv,
} from "./Footer.styled.ts";

const Footer = () => {
  return (
    <FooterDiv>
      <WorkingHoursDiv>
        <h1>Hours</h1>
        <p>Sunday - Friday</p>
        <p>11am - 6pm</p>
      </WorkingHoursDiv>
      <SocialsDiv>
        <h1>Social</h1>
        <a href={"https://www.facebook.com/dvorakinnovation"}>Facebook</a>
        <a href={"https://www.instagram.com/dvorakinnovation/"}>Instagram</a>
        <a href={"https://www.instagram.com/dvorakinnovation/"}>Tiktok</a>
      </SocialsDiv>
      <InformationDiv>
        <h1>Dvorak Innovation Pvt Ltd</h1>
        <p>Rastrabank Chowk-7</p>
        <p>Pokhara, GP, Nepal</p>
        <p>dvorakinnovation.com</p>
        <p>+9779804122607</p>
      </InformationDiv>
    </FooterDiv>
  );
};
export default Footer;
