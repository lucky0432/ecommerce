import React, { useState } from 'react'

function CartData() {
    const cart = JSON.parse(localStorage.getItem('Product')) || [];
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    const emptyCart = [];

    console.log(cart);
    function handleAdd(e){
        let id = (e.target.id);
        const cart = JSON.parse(localStorage.getItem('Product')) || [];
        // alert(id);
        let product = cart.find((i)=> i.id === id)
        if(product){
            emptyCart.push(product)
        }
        localStorage.setItem('Product',JSON.stringify(emptyCart))
        console.log(emptyCart)

    }
    return (
        <div>
            {
                cart.map((d, i) => (
                    <div key={i} className='shadow-xl flex justify-between'>
                        <h1>{d.name}</h1>
                        <h2>{d.qty}</h2>
                        <button className='px-4 py-2 bg-gray-500 text-white font-bold rounded ' id={d.id} onClick={handleAdd}>adding</button>
                        <p>{qty}</p>
                        <p>{price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CartData
