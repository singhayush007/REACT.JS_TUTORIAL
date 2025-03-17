import React, { use, useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [product, setProduct] = useState("iphone")

    const [arr, setArr] = useState([10, 20, 30])

    const [obj, setObj] = useState({
        name: "Ayush",
        salary: "1500000",
        age: 23
    })

    //const [counter , setCounter] = useState(0)
    const increaseBy1 = () => {
        //counter++;
        setCounter(counter + 1)
        console.log("counter = ", counter)
    };

    const decreaseBy1 = () => {
        //counter--;
        setCounter(counter - 1)
        console.log("counter=", counter)
    };


    return (
        <div>
            <h1>{obj.name}</h1>
            <h2>{obj.salary}</h2>
            <h3>{obj.age}</h3>
            <h1>{counter}</h1>
            <button onClick={increaseBy1}>Increase</button>
            <button onClick={decreaseBy1}>Decrease</button>
        </div>
    )
}

export default Counter
