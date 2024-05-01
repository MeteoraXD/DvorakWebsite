import HeaderDiv from './Pages/HeaderSection/Header.tsx'
import TitleSection from "./Pages/TitleSection/Titlesection.tsx";
import KnowUs from "./Pages/KnowusSection/Knowus.tsx";
import KnowServiceBetter from "./Pages/KnowServiceBetter";
import Services from "./Pages/ServicesSection/Services.tsx";
import Discover from "./Pages/DiscoverSection/Discover.tsx";
import Team from "./Pages/TeamSection/Team.tsx";
import Footer from "./Pages/FooterSection/Footer.tsx";
import ContactUs from "./Pages/ContactUsSection/ContactUs.tsx";
import ReviewSection from "./Pages/ReviewSection/Review.tsx";

function App() {

  return (
    <>
    <HeaderDiv/>
      <TitleSection/>
      <KnowUs/>
      <KnowServiceBetter/>
      <Services/>
      <Discover/>
      <ReviewSection/>
      <Team/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
