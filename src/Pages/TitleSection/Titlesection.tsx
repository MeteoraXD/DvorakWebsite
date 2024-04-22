import { QuoteDiv ,ImageDiv , TitleDiv} from "./Titlesection.styled.ts";
import { TextDiv} from "../HeaderSection/Header.styled.ts";


const TitleSection = () => {

    return(
<ImageDiv>
    <TextDiv>
        <TitleDiv>
        DVORAK INNOVATION
        </TitleDiv>
        <QuoteDiv>
            Explore the possibilities with  <span>Dvorak Innovation — </span>where innovation meets <span>excellence</span>
        </QuoteDiv>
    </TextDiv>
</ImageDiv>
    );
}
export default TitleSection;