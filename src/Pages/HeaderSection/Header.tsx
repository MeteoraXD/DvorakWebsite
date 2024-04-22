import {StyledMainDiv,
    TextDiv,
    ImagineDiv,
    LogoDiv,
    ParaphraseDiv,
    ExploreButton,


} from './Header.styled.ts'
import Logo from '../../assets/logo.png'

const HeaderDiv = () =>  {

return(
    <StyledMainDiv>
        <TextDiv>
        <ImagineDiv>Imagination is the <del  >limit</del></ImagineDiv>
            <ParaphraseDiv>We’re passionate about technology and innovation || Focus on your business while we handle the tech || We use cutting-edge technologies and industry best practices || Our commitment ensures smooth project execution</ParaphraseDiv>
            <ExploreButton>Explore DI</ExploreButton>

        </TextDiv>
    <LogoDiv src={Logo} />

    </StyledMainDiv>
)

}

export default HeaderDiv;