"use client"

import { useId, useState } from "react"
import styles from "./faqs.module.css"

export default function FAQ (props) {
    const [isExpanded, setIsExpanded] = useState(false)
    const answerId = useId()

    return (
        <div className={styles.faq}>
            <button
                className={styles.question}
                type="button"
                aria-expanded={isExpanded}
                aria-controls={answerId}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className={styles.toggle} aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                </span>
                <h3>{props.heading}</h3>
            </button>
            {isExpanded && <p className={styles.answer} id={answerId}>{props.content}</p>}
        </div>
    )
}