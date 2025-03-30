import styles from "./contact_form.css";
import Button from "../button/button";

export default function Contact_form() {
    return(
    <div className="contact_form_container">
        <div className="contact_form_inner_container">

            <h2> Contact Us </h2>
            <p>
                <br/>

                Want help or advice on a plan that suits you?

                <br/><br/>

                Email: Celeste at <a href="mailto:celeste.osrecak@hotmail.com">celeste.osrecak@hotmail.com</a>

                <br/><br/>
                
                Prefer to speak?
                <br/>
                


            </p>
            <Button link={"https://icalendly.com/celeste-osrecak/30min"} label={"Book a call"} />


        </div>
            <img className="contact_image" src="contact_img.JPG"/>
    </div>
    );
};