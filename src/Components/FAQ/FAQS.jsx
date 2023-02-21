import React, { useState } from 'react';
import { faqsData } from './data';
import FAQ from './FAQ';
import style from './faqs.module.css';

export default function FAQS() {
    const [faqs, setFaqs] = useState(faqsData);
    const faqsC = faqs.map(faq => <FAQ key={faq.id} faq1={faq} />);
    return (
        <main className={style.container}>
            <section className={style.faqs}>
                <h1>FAQS</h1>
                <hr />
                {/* {faqs.map((faq) => <FAQ key={faq.id} {...faq} />)} */}
                {faqsC}
            </section>
        </main>
    )
}

