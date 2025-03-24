// import "./plan.css";
import styles from "./plan.css";
import Button from "../button/button.js"

export default function Plan({}){
    return(
    <div className="plans-container">
        <div className="plans_inner_container">
            <h2>
                Plan title
            </h2>
            <ul>
                <li>
                    Item a
                </li>
                <li>
                    Item b
                </li>
                <li>
                    Item c
                </li>
                <li>
                    Item d
                </li>
            </ul>

            <Button label={"Button"}  link={"https://www.google.com"} />
        </div>

    </div>
    );
}