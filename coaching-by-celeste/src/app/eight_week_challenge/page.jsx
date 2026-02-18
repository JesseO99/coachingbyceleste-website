import styles from "./eight_week_challenge.module.css"
import Package from "./components/package/package";
import Socials from "../components/socials/socials";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles. header}>
          <h1 className={styles.heading}>The Women's 8 Week Challenge</h1>
          <p className={styles.subheading}>COACHING BY CELESTE</p>
        </div>
        <div className={styles.competition}>
          <div className={styles.introduction}>
            <p>
              Are you struggling to lose weight and stay consistent? <br/> <br/> 

              This 8 week challenge is for you! <br/> <br/> 

              Over the 8 weeks you will get a clear plan to lose weight that is designed specifically for women! <br/> <br/>

              <strong className={styles.start_date}>Start date 2nd of March</strong>
            </p>
          </div>
          <div className={styles.competition_img}> <img src="eight_week_challenge.jpg" /></div>
        </div>
        <div className={styles.competition_details}><h2>What's Included?</h2>
          <ul>
            <li className={styles.inclusions}>2 Personal Training Sessions</li>
            <li className={styles.inclusions}>2 EVOLT Body Comp Scans</li>
            <li className={styles.inclusions}>Weekly Sample Meal Plan</li>
            <li className={styles.inclusions}>Personalised Training Plan</li>
            <li className={styles.inclusions}>Personalised Macro's </li>
            <li className={styles.inclusions}>Fortnightly Check-In With Feedback</li>
          </ul>
          <p><strong> Upgrade me option: </strong> As part of the challenge i'm offering discounted additional personal training sessions priced at $65 for 45min (save $15 per session)</p>
          </div>
        <div className={styles.competition_winner}>
          <h2>$600 worth of Prizes</h2>
          <ul>
            <li>1X $200 LSKD Voucher </li>  
            <li>1X $100 Elite Supps Voucher</li>  
            <li>4X Personal Training Sessions</li>  
          </ul>
        </div>
        <div className={styles.packages}>
          <Package className={styles.package}
            payment = {"$344"}
            frequency = {"One Time Payment"}
            button_text = {"I'm In!"} 
            link={"https://share.newie.app/offerings/CCA02CB2-F48D-4A65-9307-0FE72D7F25BA"} 

          />
          <Package
            payment = {"$43"}
            frequency = {"Weekly Payment"}
            button_text = {"I'm In!"} 
            link={"https://share.newie.app/offerings/1B825DBD-4A11-4E73-B85E-54C09466FF33"} 
          />
          <Package
            description = {"Have a question?"} //TODO Change to a unique block and make font smaller
            frequency = {""}
            button_text = {"Find Out More"} 
            link={"https://form.jotform.com/260319100518851"} 
          />

        </div>
        
        <Socials/>
        
      </main>
    </div>
  );
}
