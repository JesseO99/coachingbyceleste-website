import styles from "./this_is_for_you.module.css";

export default function ThisIsForYou() {
    return ( <div className={styles.this_is_for_you}>
        <div>
        <h2>This is for you if:</h2>
        <ul>
            <li>You're sick of constantly starting over.</li>
            <li>You've tried diets and workout programs but struggled to maintain them.</li>
            <li>You want to lose body fat, build muscle or improve your shape.</li>
            <li>You want to feel stronger and more confident.</li>
            <li>You rely on motivation and struggle when it disappears.</li>
            <li>You want to understand how to actually do this for yourself.</li>
            <li>You're ready to make your health a lifestyle — not another temporary phase.</li>
        </ul>
        </div>
        <div className={styles.this_is_not_for_you}>
            <h2>This is NOT for you if</h2>
            <span> You are looking <br/> for a quick fix</span>
        </div>
        </div>
    )
}