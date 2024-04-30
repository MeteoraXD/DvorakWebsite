import styled from 'styled-components';

const ContactUsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Arial, sans-serif;
    padding: 100px;
    margin-top: 100px;
    margin-bottom: 200px;
`;

const ContactFormSection = styled.div`
    width: 40%;
    
    h2{
        font-size: 70px;
        font-weight: 500;
        margin-bottom: 10px;
    }
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

const InputField = styled.input`
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    background: none;
    color: black;

    &:focus + label,
    &:not(:placeholder-shown) + label {
        top: 0;
        font-size: 12px;
        color: #000;
        background-color: #fff;
        padding: 0 4px;
        border: none;
        
    }
`;

const InputLabel = styled.label`
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #000;
    transition: all 0.2s ease-out;
    pointer-events: none;
    
    span{
        color: #808080;
    }
`;
const MessageLabel = styled.label`
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 14px;
    color: #000;
    transition: all 0.2s ease-out;
    pointer-events: none;
    
   
`;

const MessageInput = styled.textarea`
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    height: 100px;
    resize: vertical;
    color: black;
    background: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
        top: -10px;
        font-size: 12px;
        color: #000;
        background-color: #fff;
        padding: 0 4px;
    }
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  align-self: flex-start;
`;

const MapSection = styled.div`
    height: 400px;        
    display: flex;
    flex-direction: column;
    
   
    
    iframe {
        border: none;
    }
`;

const MapContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const VisitUsSection = styled.div`
        
`;
const GetInTouchSection = styled.div``;

export {
    ContactUsWrapper,
    ContactFormSection,
    ContactForm,
    InputContainer,
    InputField,
    InputLabel,
    MessageInput,
    MessageLabel,
    SubmitButton,
    MapSection,
    VisitUsSection,
    GetInTouchSection,
    MapContent
};