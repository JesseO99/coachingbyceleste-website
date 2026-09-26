import styles from './invest_in_yourself.module.css';
import Button from '@/app/components/button/button';

export default function InvestInYourself() {
  return (
    <div className={styles.invest_in_yourself}>
        <div className={styles.invest_in_yourself_card}>
            <h2 className={styles.title}>Invest in Yourself</h2>
            <hr/>
            <p className={styles.price}>$37 per week </p>
            <p className={styles.description}>
                for an 8-week block (minimum term 8 weeks, rolling week to week).
            </p>
            <Button label="I'm ready!" link="https://r.newie.app/49a8ud6hftzx" />
        </div>
    </div>
  );
}
