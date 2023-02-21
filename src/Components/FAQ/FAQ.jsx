import React, { useState } from 'react';
import style from './faq.module.css';


export default function FAQ(props) {
    const [toggle, setToggle] = useState(false);
    return (
        <article className={style.faq}>
            <div>
                <h4>{props.faq1.title}</h4>
                <button onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
            </div>
            <p>{toggle && props.faq1.desc}</p>
        </article>
    )
}
