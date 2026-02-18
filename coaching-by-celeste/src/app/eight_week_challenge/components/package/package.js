import styles from "./package.css"
import Button from "@/app/components/button/button"

export default function Package(props) {

    return (<div className="package_container">
        <div className="package_details">
            {
                props.payment ? (<div><h3 className="price">{props.payment}</h3> <h4>{props.frequency}</h4></div>) : (<div> <h3 className = "description">{props.description}</h3></div>)
            }
            
        </div>
        <Button label={props.button_text}  link={props.link} />
    </div>)
}