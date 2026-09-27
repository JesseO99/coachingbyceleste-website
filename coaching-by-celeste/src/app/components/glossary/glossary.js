import styles from "./glossary.css";


function Glossary_Card (props) {
    return (
        <div className={"glossary_card"}>
            <h3 className={"glossary_card_title"}>{props.title}</h3>
            <p className={"glossary_card_decription"}>{props.description}</p>
        </div>) 

}

export default function Glossary() {
    return(
    <div className="glossary_container">
        <Glossary_Card title="Nutrion" description="Personalised meal plans tailored to your goals and lifestyle. Makes nutrition easy to through meal prep hacks and recipe ideas."/>
        <Glossary_Card title="Training" description="Evidence based training programs customised to your goals."/>
        <Glossary_Card title="Mindset" description="Improving your mindset and personal development by creating healthy habits to boost confidence in all areas of your life."/>
    </div>
    );
};