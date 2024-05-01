import { GetStartedButton, Divider, OurServiceDiv, TextButtonContainer, OurServiceExplain, OurServiceTitle } from './Services.styled';

const OurServices = () => {

    const scrollToContactUs = () => {
        const contactUsSection = document.getElementById('ContactUs');
        if (contactUsSection) {
            contactUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <OurServiceDiv>
                <OurServiceTitle>
                    Product Designs UI/UX
                </OurServiceTitle>
                <TextButtonContainer>
                    <OurServiceExplain>Even the finest idea for a digital project has to focus not only on the technical details but also on the visual aspect. Our team assembled to focus on your product’s design will hold a few meetings with you to set goals and establish a clear direction for your product and ensure it is attractive to users. We also offer 2 months of Ui/Ux design course which will make you capable enough to land job as designers so please contact our office for further details.</OurServiceExplain>
                    <GetStartedButton onClick={scrollToContactUs}>Get started →</GetStartedButton>                </TextButtonContainer>
            </OurServiceDiv>
            <Divider />
            <OurServiceDiv>
                <OurServiceTitle>
                    Mobile Development
                </OurServiceTitle>
                <TextButtonContainer>
                    <OurServiceExplain>Contact us to get a quick estimation for your mobile app project in a time material or fixed price scheme. We build apps for iOS, Android or cross-platform and in record time. We’ll create exactly the mobile app you wanted and make sure it impresses your customers.</OurServiceExplain>
                    <GetStartedButton>Get started →</GetStartedButton>
                </TextButtonContainer>
            </OurServiceDiv>
            <Divider />
            <OurServiceDiv>
                <OurServiceTitle>
                    Web Development
                </OurServiceTitle>
                <TextButtonContainer>
                    <OurServiceExplain>Don’t rely on the whims of freelancers. With outsourcing you can be sure your web project is in good hands. We can handle the entire web development process from start to finish. From MVP to full project with a beautiful UI, everything is handled by our team. With the entire web app development process happening in one place you can make sure there won’t be any hiccups and you’ll get exactly the web app you requested and on time.</OurServiceExplain>
                    <GetStartedButton>Get started →</GetStartedButton>
                </TextButtonContainer>
            </OurServiceDiv>
            <Divider />
            <OurServiceDiv>
                <OurServiceTitle>
                    Big Data Analytics
                </OurServiceTitle>
                <TextButtonContainer>
                    <OurServiceExplain>We offer cutting-edge services in social media analysis and geospatial big data analysis, using machine learning algorithms to provide our clients with valuable insights and solutions. Contact us today to learn more about how we can help your business stay ahead of the curve.</OurServiceExplain>
                    <GetStartedButton>Get started →</GetStartedButton>
                </TextButtonContainer>
            </OurServiceDiv>
            <Divider />
        </>
    );
}

export default OurServices;
