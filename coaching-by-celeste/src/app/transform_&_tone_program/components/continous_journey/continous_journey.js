import styles from './continous_journey.module.css';

export default function ContinousJourney() {
	return (
		
		<div className={styles.continous_journey}>
			<h2>
				Your journey doesn't end after 8 weeks: <br/>
				It evolves with you.
			</h2>
			<div className={styles.the_journey_container}>
				<div className={styles.journey_card}>
					1: Foundations
				</div>
				<div className={styles.journey_card}>
					2: Transform
				</div>
				<div className={styles.journey_card}>
					3: Tone
				</div>
				<div className={styles.journey_card}>
					4: Maintain
				</div>
			</div>

		</div>
	);
}
