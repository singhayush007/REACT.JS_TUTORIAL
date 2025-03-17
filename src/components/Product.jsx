import React from 'react'

const Product = ({tite, brand, price, rom, ram , camera, fingerprint}) => {
    return (
        <div>
            <h2>Mobile Name = {props.title}</h2>
            <h3>Mobile Brand = {props.brand}</h3>
            <h4>Mobile Price = {props.price}</h4>
            <h5>ROM = {props.rom}</h5>
            <h6>RAM = {props.ram}</h6>
            <h6>Camera = {props.camera}</h6>
            <h6>fingerprint = {props.fingerprint}</h6>
        </div>
    )
}

export default Product
