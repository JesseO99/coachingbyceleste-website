// import "./plan.css";
import styles from "./plan.css";
import Button from "../button/button.js"

export default function Plan(props){
    return(
    <div className="plan-container">
        <div className="plan_inner_container">
            <h2 className="plan_heading">
                {props.title}
            </h2>
            <p className="plan_terms">
                {props.terms}
            </p>
            
            {(props.header) ? <p className="plan_footer"> {props.header}</p> : ""}
            
            <ul className="plan_list">
                {props.inclusions.map((inclusion) => <li>{inclusion}</li>)}
            </ul>

            {(props.footer) ? <p className="plan_footer"> {props.footer}</p> : ""}
            
            <Button label={"Enrol Now"}  link={props.link} />
        </div>

    </div>
    );
}