import React from 'react';

const Filterproduct = () => {
    const products = [
        { id: 1, title: "iPhone 16", category: "mobiles", price: 50000 },
        { id: 2, title: "MacBook", category: "laptops", price: 90000 },
        { id: 3, title: "Haier", category: "Refrigerators", price: 100000 },
        { id: 4, title: "Hitachi", category: "Ac", price: 40000 },
    ];

    const filteredData = products.filter((data) => data.category === "mobiles");
    console.log(filteredData);

    return (
        <>
            {filteredData.map((data) => (
                <div key={data.id}>
                    <h1>{data.title}</h1>
                    <p>Price: ₹{data.price}</p>
                </div>
            ))}
        </>
    );
};

export default Filterproduct;

