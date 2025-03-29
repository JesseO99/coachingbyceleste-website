import styles from "./page.module.css";
import Plan from "./components/plan/plan";
import Bio from "./components/bio/bio";
import Glossary from "./components/glossary/glossary";
import Contact_form from "./components/contact_form/contact_form";
// import "../../public/hero_img" as Hero;  
// import IMG from "https://picsum.photos/id/1/200/300"


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1>
          Coaching By Celeste
        </h1> */}
        <img className={styles.hero_img} src="hero_img.JPG"/>
        <Bio/>
        <Plan 
          title={"Online coaching - Training and nutrition"} 
          terms={<>Terms: min 8 weeks,<br/>2 weeks cancellation notice,<br/>14 days pause notice</>} 
          inclusions={
            [
              'Access to Coaching by Celeste app', 
              'Personalised meal plan, updating macro/calorie targets', 
              'Teach how to create your own meal plan', 
              'Personalised training program',
              'Accountability',
              'Lifestyle and step goals',
              'Weekly check ins with feedback',
              'Daily habits checklist',
              '1:1 messaging support',
              'Vault access to recipes and other materials'
            ]
          } 
          link={"https://www.google.com"} 
        />
        <Plan 
          title={"Online coaching - Nutrition only"} 
          terms={<>Terms: min 8 weeks,<br/>2 weeks cancellation notice,<br/>14 days pause notice</>} 
          inclusions={
            [
              'Access to Coaching by Celeste app', 
              'Personalised meal plan, updating macro/calorie targets', 
              'Teach how to create your own meal plan', 
              'Lifestyle goals',
              'Weekly check ins with feedback',
              'Accountability',
              'Daily habits checklist',
              '1:1 messaging support',
              'Vault access to recipes and other materials'
            ]
          } 
          link={"https://www.google.com"} 
        />
        <Plan 
          title={"Once off training pack"} 
          terms={<>Terms: 10 weeks commitment,<br/>non-refundable</>} 
          inclusions={
            [
              'Once off training program tailored to your goals (10 weeks)', 
              'No check ins ', 
              'No support include' 
            ]
          } 
          link={"https://www.google.com"} 
        />
        <Plan 
          title={"Once off meal plan "} 
          terms={<>Terms: Non refundable</>} 
          header={'X1 Personalised meal plan'}
          inclusions={
            [ 
              'Tailored to your goals: Designed specifically to meet goals', 
              'Adapted to your preferences: Customised to your likes and dislikes', 
              'Considerate of dietary needs: Adjusted for food sensitivities or allergies',
              'Flexible and can be used for as many week as you would like ',
              'Step-by-step guide on how to use My Fitness Pal included'
            ]
          } 
          footer = {<>Flexible and can be used for as many week as you would like. <br/><br/> Step-by-step guide on how to use My Fitness Pal included.</>}
          link={"https://www.google.com"}
        />
        <Glossary/>
        <Contact_form/>
      </main>
        

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
