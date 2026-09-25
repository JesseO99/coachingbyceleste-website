import styles from './here_is_what_you_get.module.css';

export default function HereIsWhatYouGet() {
	return (
		<div className={styles.here_is_what_you_get}>
            <div className={styles.here_is_what_you_get_card}>
                <h2>Here's What You Get</h2>
                <hr className={styles.card_divider} />
                <ul>
                    <li>
                        <p><strong>Structured training program:</strong> Updated every 8 weeks.</p>
                    </li>
                    <li>
                        <p><strong>Individual calorie &amp; macro targets:</strong> Set according to your goals.</p>
                    </li>
                    <li>
                        <p><strong>Foundations education:</strong> Learn the skills behind sustainable results.</p>
                    </li>
                    <li>
                        <p><strong>Progress tracking:</strong> See how you're progressing beyond just the number on the scales.</p>
                    </li>
                    <li>
                        <p><strong>Weekly self check-ins:</strong> Reflect on your week, identify what's working and set your focus for the week ahead.</p>
                    </li>
                    <li>
                        <p><strong>Community support:</strong> Connect with other women throughout your journey.</p>
                    </li>
                    <li>
                        <p><strong>Ongoing progression:</strong> Move through the TTP stages as your goals evolve.</p>
                    </li>
                </ul>
            </div>
            <div className={styles.inclusion_img}>
                <img src="Celeste_squat.JPG" alt="Celeste doing a squat"/>
            </div>
			
		</div>
	);
};

