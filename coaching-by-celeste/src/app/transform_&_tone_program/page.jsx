import styles from "./transform_&_tone.module.css"
import ThisIsForYou from "./components/this_is_for_you/this_is_for_you";
import StopStartingOver from "./components/stop_starting_over/stop_starting_over";
import HereIsWhatYouGet from "./components/here_is_what_you_get/here_is_what_you_get";
import ContinousJourney from "./components/continous_journey/continous_journey";
import InvestInYourself from "./components/invest_in_yourself/invest_in_yourself";
import NotAQuickFix from "./components/not_a_quick_fix/not_a_quick_fix";
import FAQs from "./components/frequently_asked_questions/faqs";
import Footer from "../components/footer/footer";

export default function Page() {
  return ( 
  <div className={styles.ttp_page}>
    <div className={styles.ttp_header}>
      <img className={styles.ttp_hero_image} src="Celeste_Lunge.JPG" alt="Celeste doing a lunge"/>
      <h1>
        <span className={styles.title}>TTP</span> 
        <br/>
        <span className={styles.subtitle}>Transform & Tone Program</span>
      </h1>
    </div>
    <StopStartingOver/>
    <ThisIsForYou/>
    <HereIsWhatYouGet/>
    <ContinousJourney/>
    <InvestInYourself/>
    <NotAQuickFix/>
    <FAQs/>
    <Footer/>
  </div>)
}