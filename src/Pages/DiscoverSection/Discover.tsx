import {  MainDiv , TitleButtonDiv , QuoteDiv , ParaphraseDiv , DiscoverDiv , ButtonSection } from "./Discover.styled.ts";

const Discover = () => {
    return (
        <MainDiv>
            <TitleButtonDiv>
                <DiscoverDiv>
                    Discover a world of possibilities
                </DiscoverDiv>
                <ButtonSection>Get Started</ButtonSection>
            </TitleButtonDiv>
            <QuoteDiv>
            <ParaphraseDiv>

                Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination.
</ParaphraseDiv>
                <ParaphraseDiv>                Navigating life’s intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey.
                </ParaphraseDiv>
            </QuoteDiv>
        </MainDiv>

    )
}
export default Discover;