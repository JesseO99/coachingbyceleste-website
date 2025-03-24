import styles from "./button.css";



export default function Button ({label, link}) {
    return(
        <a href={link} className="Button">
            {label} 
        </a>
    );
}