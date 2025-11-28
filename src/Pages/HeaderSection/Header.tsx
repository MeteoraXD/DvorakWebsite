import {
    StyledMainDiv,
    TextDiv,
    ImagineDiv,
    LogoDiv,
    ParaphraseDiv,
    ExploreButton,
    LogoContainer,
    ColoredLogoDiv
} from "./Header.styled.ts";
import DvorakLogo from "../../assets/dvorak.tsx";
import AnimatedDvorakLogo from "../../assets/animateddvorak.tsx";

const HeaderDiv = () => {
    return (
        <StyledMainDiv>
            <TextDiv>
                <ImagineDiv>
                    Imagination is the <del>limit</del>
                </ImagineDiv>
                <ParaphraseDiv>
                    From full-stack engineering to AI-powered systems, we build reliable, future-ready digital products
                    using modern tools and proven industry practices. Our team of engineers, designers, data scientists,
                    and creators share one core belief: great technology should be simple, scalable, and human-centered.
                    We collaborate with startups, enterprises, and institutions to design systems that endure, solve
                    real problems, and help teams work smarter.
                </ParaphraseDiv>
                <ExploreButton>Explore DI</ExploreButton>
            </TextDiv>
            <LogoContainer>
                <LogoDiv>
                    <DvorakLogo/>
                </LogoDiv>
                <ColoredLogoDiv>
                    <AnimatedDvorakLogo/>
                </ColoredLogoDiv>
            </LogoContainer>
        </StyledMainDiv>
    );
};

export default HeaderDiv;