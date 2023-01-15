import React, { useContext } from 'react'
import { Box, Text, Image, HStack } from "@chakra-ui/react"
import style from "./style.module.css"
import { useState } from 'react'
import NewButton from './NewButton'
import { CartContext } from '../Context/cartContext'



const Products = ({ ele }) => {
  const { id, imageURL, name, type, price, currency, color, gender, quantity } = ele;


  const { updateCart, addToCart, cart,removeFromCart } = useContext(CartContext)

  const [click, setClick] = useState(false)
  const [qty, setQty] = useState(1)


  const newQuantity =  (value) => {
    if (value > 0 && quantity === qty) {
      alert("max Quantity already reached")
      return;
    }
    setQty(qty + value)
  }
  if (qty === 0) {
    setClick(false)
    removeFromCart(id)
    setQty(1)
  }

  const updateQty = (value) => {
    if (qty === quantity) {
      return;
    }

    let newcart = cart.map((el) => {
      if (el.id === id) {
        console.log(value)
        let newel = { ...el, qty: qty + value }
        return newel
      }
      return el
    })
    updateCart(newcart)
  }


  const handleCart = () => {
    setClick(true);

    let prod = { id, imageURL, name, type, price, currency, color, gender, quantity, qty }
    addToCart(prod)
  }

  return (
    <Box className={style.ProdBox}>
      <Text>{name}</Text>
      <Image className={style.ProdImage} src={imageURL} alt={name} />
      <HStack className={style.cartbox}>

        <Text>Rs{price}</Text>
        {
          click ? <NewButton qty={qty} newQuantity={newQuantity} updateQty={updateQty} />
            : <button className={style.addtoCart} onClick={handleCart} style={{ backgroundColor: "black", color: "white" }}>Add to Cart</button>
        }
      </HStack>
    </Box>
  )
}

export default Products