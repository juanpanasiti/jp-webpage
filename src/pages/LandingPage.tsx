import { Footer, Header, Hero } from "../components"
import { Techs } from "../components/home/Techs"

export const LandingPage = () => {
  return (
    <div className="home-page__container">
        <Header/>

        <Hero/>
        <Techs/>
        
        <Footer/>
    </div>
  )
}
