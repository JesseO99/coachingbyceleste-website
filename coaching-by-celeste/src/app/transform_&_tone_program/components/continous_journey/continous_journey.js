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
					<h3>1: Foundations</h3>
					<p>Learn the fundamentals and build the habits and consistency you need to create lasting change.</p>
				</div>
				<div className={styles.journey_card}>
					<h3>2: Transform</h3>
					<p>Lose body fat while maintaining your muscle and strength.</p>
				</div>
				<div className={styles.journey_card}>
					<h3>3: Tone</h3>
					<p>Build muscle, strength and shape.</p>
				</div>
				<div className={styles.journey_card}>
					<h3>4: Maintain</h3>
					<p>Learn how to maintain your results and make your new habits your lifestyle.</p>
				</div>
				
			</div>
			<p className={styles.chase_line}>
				Your goal can change. Your stage can change. You don't have to start over.
			</p>

		</div>
	);
}
