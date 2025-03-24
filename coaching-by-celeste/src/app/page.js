import styles from "./page.module.css";
import Plan from "./components/plan/plan";
// import "../../public/hero_img" as Hero;  
// import IMG from "https://picsum.photos/id/1/200/300"


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          Coaching By Celeste
        </h1>
        <img className={styles.hero_img} src="hero_img.JPG"/>
        <Plan/>

      </main>
        

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
