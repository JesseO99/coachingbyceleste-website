// import "./plan.css";
import styles from "./plan.module.css";
import Button from "../button/button.js"

export default function Plan(props){
    return(
    <div className={styles.plan_container}>
        <div className={styles.plan_inner_container}>
            
            <p className={styles.category}>{props.category}</p>
            <h2 className={styles.plan_heading}>
                {props.title}
            </h2>
            
            
            {props.price !== undefined && props.price !== null && props.price !== "" ? (
                <div className={styles.price_line}><p className={styles.plan_price}>{props.price}</p>{props.durration} </div>
            ) : null}
            <hr/>
            <p className={styles.plan_terms}>
                {props.terms}
            </p>
            
            {(props.header) ? <p className={styles.plan_footer}> {props.header}</p> : ""}
            
            <ul className="plan_list">
                {props.inclusions.map((inclusion) => <li key={inclusion}>{inclusion}</li>)}
            </ul>

            {(props.footer) ? <p className={styles.plan_footer}> {props.footer}</p> : ""}
            
            <span className={styles.button}>
                <Button  label={"I'm in!"}  link={props.link} />
            </span>
            
        </div>

    </div>
    );
}