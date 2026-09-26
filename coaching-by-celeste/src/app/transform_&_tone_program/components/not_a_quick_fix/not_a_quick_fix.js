import styles from "./not_a_quick_fix.module.css";

export default function NotAQuickFix() {
	return <div className={styles.not_a_quick_fix}>
        <h2>This isn't another 8-week quick fix.</h2>
        <hr/>
        <p className={styles.subtitle}>
            It's about learning how to look after your body for life.
        </p>
        <p>
            TTP teaches you the skills, knowledge and habits you need to train effectively, eat well, stay consistent and handle real life, so you can get results without constantly having to start over.
        </p>
    </div>;
}
