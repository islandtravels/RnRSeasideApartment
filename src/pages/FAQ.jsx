import React, { useState } from "react";
import "../css/faq.css";

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="faq-item">
            <button
                className={`faq-question ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
            >
                {question}
                <span className="faq-icon">{open ? "-" : "+"}</span>
            </button>

            <div className={`faq-answer ${open ? "show" : ""}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "What is the minimum amount of days that the room can be booked?",
            answer: "minimum stay is for 2 days upto 28 days"
        },
        {
            question: "How many bedrooms does have 2BR Cozy Seaside Condo in Dumaguete have?",
            answer: "2BR Cozy Seaside Condo in Dumaguete has 2 available rooms: one master beroom with a queen sized bed, and one kids bedroom with a two person bunk bed."
        },
        {
            question: "How far is 2BR Cozy Seaside Condo in Dumaguete from the center of Dumaguete?",
            answer: "2BR Cozy Seaside Condo in Dumaguete is 1.4 km from the center of Dumaguete."
        },
        {
            question: "What is there to do at 2BR Cozy Seaside Condo in Dumaguete?",
            answer: "Dumaguete? 2BR Cozy Seaside Condo in Dumaguete offers the following activities/services (charges may apply): Fitness center, Pool table, Swimming pool"
        },
        {
            question: "Is there parking?",
            answer: "Parking is not provided."
        },
    ];

    return (
        <>
            <br /><br /><br />
            <br /><br /><br />
            <section id="faq" className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqs.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQ;
