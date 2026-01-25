import styles from "../page.module.css";
import Contact_form from "../components/contact_form/contact_form";
export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Women's 8 Week Challenge</h1>
        Competition Details

        <Contact_form/>
      </main>
    </div>
  );
}