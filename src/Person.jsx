import React from 'react'
import Superman from './Superman';
const Person = () => {
    const name = "spiderman";
    const age = 30;

    const person = {
        name: "Ayush",
        age: 18,
        gmail: "ayushsingh24958@gmail.com",
        pincode: 230304,
    };

    const product = {
        title: "iphone",
        model: "iphone -15",
        price: 65000,
    };
    return (
        <>
            <div>
                <h1> Name = {person.name}</h1>
                <h1> Age = {person.age}</h1>
                <h1> Email = {person.gmail}</h1>
                <h1> PinCode = {person.pincode}</h1>
            </div>
            <Superman/>
            <div>
                <h1>title = {product.title}</h1>
                <h2>model = {product.model}</h2>
                <h4>price = {product.price}</h4>
            </div>
            </>
    )
}

export default Person
