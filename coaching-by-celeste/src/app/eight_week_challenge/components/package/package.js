import styles from "./package.css"
import Button from "@/app/components/button/button"

export default function Package(props) {

    return (<div className="package_container">
        <div className="package_details">
            <h3>{props.payment}</h3>
            <h4>{props.frequency} </h4>
        </div>
        <Button label={props.button_text}  link={props.link} />
    </div>)
}