import styles from "./faqs.module.css"
import FAQ from "./faq"
export default function FAQs() {
    return(<div className={styles.faqs_section}>
        <h2> FAQ's </h2>
        <FAQ heading="Howlong is TTP?" content="TTP is an ongoing program. You begin with 8 weeks of Foundations, then progress into the stage that best suits your goals."/>
        <FAQ heading = "Do I get individual coaching?" content="TTP is a group coaching program, so it does not include individual weekly coaching feedback. You'll have the structure, education, resources, progress tracking and community support to help you stay accountable."/>
        <FAQ heading = "What happens after Foundations?" content="You can move into Transform, Tone or Maintain depending on your current goal."/>
        <FAQ heading = "Do I need to be experienced in the gym?" content="No. Foundations is designed to teach you the basics and give you the confidence to train effectively."/>
        <FAQ heading = "What if I fall off?" content="You don't start over. TTP teaches you exactly how to reset, adjust and keep moving forward."/>
        <FAQ heading = "Is TTP women only?" content="Yes. TTP is designed specifically for women."/>
        {/* <FAQ heading = "" content=""/>
        <FAQ heading = "" content=""/> */}
    </div>)
}