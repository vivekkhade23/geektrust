import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { CartContext } from '../Context/cartContext'
import style from "./style.module.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

const CartBox = ({ id, image, name, price, qty, quantity }) => {
    const { removeFromCart, updateCart, cart } = useContext(CartContext)

    let arr = Array.from(Array(quantity).keys()).map(x => x + 1)

    const handlenewQty = (value) => {
        let newcart = cart.map((el) => {
            if (el.id === id) {
                console.log(value)
                let newel = { ...el, qty: value }
                return newel
            }
            return el
        })
        updateCart(newcart)
    }


    return (
        <div className={style.cartmainbox}>

            <HStack className={style.newcartbox}>
                <img src={image} className={style.cartboximage} alt="" />
                <VStack>
                    <Text className={style.cartboxname}>{name}</Text>
                    <Text className={style.cartboxprice}>Rs.{price}</Text>
                </VStack>
                <button className={style.cartQty}>Qty.{qty} <span>
                    <Menu>
                        <MenuButton >
                            <AiFillCaretDown />
                        </MenuButton>
                        <MenuList>
                            {arr.map((el, ind) => {
                                return <MenuItem onClick={() => handlenewQty(el)} style={{color:"black"}} key={ind} value={el}>{el}</MenuItem>

                            })}
                        </MenuList>
                    </Menu>

                </span></button>
                <button className={style.delete} onClick={() => removeFromCart(id)}>Delete</button>
            </HStack>
        </div>
    )
}

export default CartBox