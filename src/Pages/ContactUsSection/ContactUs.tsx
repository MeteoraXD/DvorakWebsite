import {
    ContactUsWrapper,
    ContactFormSection,
    ContactForm,
    InputContainer,
    InputField,
    MessageInput,
    SubmitButton,
    MapSection,
    InputLabel,
    MessageLabel,
    VisitUsSection,
    GetInTouchSection,
    MapContent
} from './ContactUs.styled';

const ContactUs = () => {
    return (
        <ContactUsWrapper>
            <ContactFormSection>
                <h2>Contact us</h2>
                <ContactForm>
                    <InputContainer>
                        <InputField id="name" placeholder=" " required />
                        <InputLabel htmlFor="name">Name <span>(required)</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <InputField id="email" placeholder=" " required />
                        <InputLabel htmlFor="email">Email <span>(required)</span></InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <MessageInput id="message" placeholder=" " />
                        <MessageLabel htmlFor="message">Message</MessageLabel>
                    </InputContainer>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </ContactForm>
            </ContactFormSection>
            <MapSection>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.76348528991394!2d83.97161727281679!3d28.200756508354406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951a1ada40ed%3A0x206bfc06767f1ce!2sDvorak%20Innovation%20%7C%20Website%20%26%20App%20Development!5e0!3m2!1sen!2snp!4v1714455085075!5m2!1sen!2snp"
                        width="700" height="500"  loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <MapContent>
                <VisitUsSection>
                    <h3>Visit us</h3>
                    <p>Rastra Bank Chowk 7,</p>
                    <p>Pokhara, Gandaki Province, Nepal</p>
                </VisitUsSection>
                <GetInTouchSection>
                <h3>Get in touch</h3>
                <p>dvorakinnovation.com</p>
                <p>+977-9804122607</p>
                </GetInTouchSection>
                </MapContent>
            </MapSection>
        </ContactUsWrapper>
    );
};

export default ContactUs;