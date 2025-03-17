import React from 'react'

const ShowProduct = () => {
    let products = [
        { id: 1, title: "iphone-13, price: 50000" },
        { id: 2, title: "iphone-14, price: 60000" },
        { id: 3, title: "iphone-15, price: 70000" },
        { id: 4, title: "iphone-16, price: 80000" },
    ]
    return (
        <div>
            {products.map((data) => (<div key={data.id}>
                <h1>Title = {data.title}</h1>
                <h2>Price = {data.price}</h2>
            </div>
            ))}
        </div>
    )
}

export default ShowProduct
