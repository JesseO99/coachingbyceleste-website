"use client";

import styles from "./contact_form.css";
import Button from "../button/button";
import { useEffect, useRef, useState } from "react";


export default function Contact_form() {


    const targetDivRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const targetDiv = targetDivRef.current;
        if (!targetDiv) return;

        const updateHeight = () => setHeight(targetDiv.clientHeight);

        // Initialize height
        updateHeight();

        // Watch for height changes
        const observer = new ResizeObserver(updateHeight);
        observer.observe(targetDiv);

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return(
    <div className="contact_form_container">
        <div ref={targetDivRef} className="contact_form_inner_container">

            <h2> Contact Celeste </h2>
            <p>
                <br/>

                Want help or advice on a plan that suits you?

                {/* <br/><br/>

                Email: Celeste at <a href="mailto:celeste.osrecak@hotmail.com">celeste.osrecak@hotmail.com</a> */}

                <br/><br/>
                
                Prefer to speak?
                <br/>
                


            </p>

            <div className="button_container" >
                <Button link={"https://icalendly.com/celeste-osrecak/30min"} label={"Book a call"} />
            </div>



        </div>
            <img style={{ height:`${height}px`}} className="contact_image" src="contact_img.JPG"/>
            
    </div>
    );
};