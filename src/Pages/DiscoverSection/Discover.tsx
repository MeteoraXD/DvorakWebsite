import {
  MainDiv,
  TitleButtonDiv,
  QuoteDiv,
  ClientLogoDiv,
  DiscoverDiv,
  ButtonSection,
} from "./Discover.styled.ts";

const Discover = () => {
  return (
    <MainDiv>
      <TitleButtonDiv>
        <DiscoverDiv>Our Trusted Clients</DiscoverDiv>
        <ButtonSection>Get Started</ButtonSection>
      </TitleButtonDiv>
      <QuoteDiv>
        <ClientLogoDiv>
          Welcome to a world of limitless possibilities, where the journey is as
          exhilarating as the destination, and where every moment is an
          opportunity to make your mark on the canvas of existence. The only
          limit is the extent of your imagination.
        </ClientLogoDiv>
        <ClientLogoDiv>
          {" "}
          Navigating life’s intricate fabric, choices unfold paths to the
          extraordinary, demanding creativity, curiosity, and courage for a
          truly fulfilling journey.
        </ClientLogoDiv>
      </QuoteDiv>
    </MainDiv>
  );
};
export default Discover;
