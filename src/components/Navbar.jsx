import React from 'react'
import { HStack, Text, Box } from "@chakra-ui/react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import style from "./style.module.css"
import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../Context/cartContext'


const Navbar = () => {
const {cart}=useContext(CartContext)
    const NavLinkStyle=({isActive})=>{
        return{
            textDecoration:isActive?"underline":"none",
        }
    }


    return (
        <HStack className={style.mainBox}>
            <Text>TeeRex Store</Text>
            <Box className={style.subBox}>
                <NavLink style={NavLinkStyle} to="/">
                    <Text className={style.products} >
                        Products
                        </Text>
                </NavLink>
                <NavLink className={style.display}  style={NavLinkStyle} to="/cart">
                    <AiOutlineShoppingCart className={style.cart} />
                    <span className={style.cartspan}>{cart.length}</span>
                </NavLink>
            </Box>
        </HStack>
    )
}

export default Navbar