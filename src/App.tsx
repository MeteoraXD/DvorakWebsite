import HeaderDiv from './Pages/HeaderSection/Header.tsx'
import TitleSection from "./Pages/TitleSection/Titlesection.tsx";
import KnowUs from "./Pages/KnowusSection/Knowus.tsx";
import KnowServiceBetter from "./Pages/KnowServiceBetter";
import Services from "./Pages/ServicesSection/Services.tsx";
import Discover from "./Pages/DiscoverSection/Discover.tsx";
import Team from "./Pages/TeamSection/Team.tsx";
import Footer from "./Pages/FooterSection/Footer.tsx";

function App() {

  return (
    <>
    <HeaderDiv/>
      <TitleSection/>
      <KnowUs/>
      <KnowServiceBetter/>
      <Services/>
      <Discover/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App
