import FaqStyles from "./faq.module.css";
import Link from "next/link";
import questions from "./faqs";

export default function FaqPage() {
    return (
        <div className={FaqStyles.container}>
            <div className={FaqStyles.pageTitle}>
                <h2>Questions? Look here.</h2>
                <p>Can´t find an answer? <Link className={FaqStyles.contactLink} href={"/contact"}>Contact us.</Link></p>
            </div>
            
            <div className={FaqStyles.cardsContainer}>
                {questions.map((item, index) => {
                    return (
                        <div className={FaqStyles.singleCardContainer} key={index}>
                            <div className={FaqStyles.singleCard}>
                                <div className={`${FaqStyles.cardFront}`}>
                                    <p className={FaqStyles.cardContent}><span className={FaqStyles.cardSection}>{item.section}</span>{item.question}</p>
                                </div>

                                <div className={FaqStyles.cardBack}>
                                    <p className={FaqStyles.cardContent}>{item.answer}</p>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>


        </div>
    )
}