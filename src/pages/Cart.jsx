import { Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import CartBox from '../components/CartBox'
import Total from '../components/Total'
import { CartContext } from '../Context/cartContext'
import style from "./pagestyle.module.css"

const Cart = () => {
  const { cart } = useContext(CartContext)


  return (
    <div>
      <br />
      <div style={{ display: "flex", paddingLeft: "20%", justifyContent: "flex-start" }}>
        <Text >Shopping Cart</Text>
      </div>
      <br />
      {cart?.map((el) => {
        return <CartBox key={el.id} id={el.id} image={el.imageURL} name={el.name} price={el.price} quantity={el.quantity} qty={el.qty} />
      })}
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <hr className={style.hr} />

      </div>
      <Total />
    </div>
  )
}

export default Cart