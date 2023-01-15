import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartContext } from '../Context/cartContext'

const Total = () => {
    const {cart}=useContext(CartContext)
    const [tot,setTot]=useState(0);
    useEffect(()=>{
        let u=cart?.reduce((acc,curr)=>acc+curr.price*curr.qty,0 )
        console.log(u,"useeeeeeeeeee")
        setTot(u)
    })

  return (
    <div>Total Amount Rs:{tot}</div>
  )
}

export default Total