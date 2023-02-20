import React from 'react';
import Card from './Card';
import Card1 from './Card1';
import STATE from './STATE';
import { v4 as uuidv4 } from 'uuid';

import data from '../../data.json';
import Products from './Products';

import Icons from './Icons';

const Body = () => {

    //Using For loop
    let cards = [];
    for (let i = 0; i < data.length; i++) {
        cards.push(
            <Card title={data[i].title} desc={data[i].desc} footer={data[i].desc} key={uuidv4()} />
        )
    }
    //using map
    //let items = []
    const items = data.map((item, i) => {
        return <Card title={item.title} desc={item.desc} footer={item.desc} key={i} />
    })
    return (
        <div className='container mt-2'>
            <STATE count="0" />
            {/* <Icons /> */}
            <h1 className='hStyle text-center'>TODO</h1>
            <Products />
            <div className="row">
                {cards}
                {/* <Card1 name="Kamrul Hasan" phone="01632314744" address="Monpura, Kachua, Chandpur Dhaka BD" /> */}
            </div>
        </div >
    );
}

export default Body;