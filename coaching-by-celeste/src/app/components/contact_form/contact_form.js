"use client";

import styles from "./contact_form.css";
import Button from "../button/button";


export default function Contact_form() {
    return(
    <div className="contact_form_container">
        <div className="contact_form_inner_container">

            <h2> Contact Celeste </h2>
            <hr/>
            <p>
                <br/>

                Want help or advice on a plan that suits you?

                <br/><br/>
            </p>
            <a href="https://www.instagram.com/coachingbyceleste/">
            <span className="instagram_plug">
                <img src="instagram_mono.png"/><p><strong>Direct Message</strong><br/> Send a DM to @coachingbyceleste  </p>
            </span>    
            </a>
            {/* <p>
                <br/><br/>
                
                Prefer to speak?
                <br/>
                


            </p>

            <span className="button_container" >
                <Button link={"https://calendly.com/celeste-osrecak/30min"} label={"Book a call"} />
            </span> */}



        </div>
            <img className="contact_image" src="phonecall.png"/>
    </div>
    );
};