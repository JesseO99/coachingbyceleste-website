import styles from "./page.module.css";
import Plan from "./components/plan/plan";
// import IMG from "https://picsum.photos/id/1/200/300"


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          Coaching By Celeste
        </h1>
        <img className={styles.hero_img} src="https://picsum.photos/id/65/200/300"/>
        <Plan/>

      </main>
        

      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
