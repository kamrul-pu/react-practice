import React, { useEffect, useState } from 'react'

import style from './dynamic.module.css';

const DynamicStyle = () => {
    const [name, setName] = useState('');
    const [validInput, setValidInput] = useState(false);
    useEffect(() => {
        if (name.length < 2) {
            setValidInput(false);
        } else {
            setValidInput(true);
        }

    }, [name])
    const handleChange = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <input className={`${validInput ? style.valid : style.invalid}`} type="text" name="" id="" onChange={handleChange} value={name} />
        </div>
    )
}

export default DynamicStyle