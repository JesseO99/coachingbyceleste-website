import styles from "./footer.module.css";
import Socials from "../socials/socials";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<a href="/" aria-label="Coaching by Celeste home">
					@coachingbyceleste
				</a>
                <hr/>
                <Socials/>

			</div>
		</footer>
	);
}
