import React from 'react'
import { HStack, Box, VStack } from "@chakra-ui/react"
import FilterSection from '../components/FilterSection'
import { useState } from 'react'
import { useEffect } from 'react'
import Products from '../components/Products'
import style from "./pagestyle.module.css"
import { BsSearch } from "react-icons/bs"
import { HiFilter } from "react-icons/hi"
import { useContext } from 'react'
import { CartContext } from '../Context/cartContext'



const Home = () => {
    const [text, setText] = useState("")
    const [data, setData] = useState([])
    const { setProduct, prod } = useContext(CartContext)
    

    useEffect(() => {
        fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
            .then(res => res.json())
            .then(res => setData(res))

        fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
            .then(res => res.json())
            .then(res => setProduct(res))
    },[])

    const handleSearch = () => {
        let newcart = prod?.filter(((el) => {
            if (text === "") {
                return el;
            }
            if (el.name.toLowerCase().includes(text.toLowerCase()) || el.color.toLowerCase().includes(text.toLowerCase()) || el.type.toLowerCase().includes(text.toLowerCase())) {
                return true;
            }

        }))
        setData(newcart)
    }


    return (
        <VStack>
            <div className={style.searchbox}>

                <input placeholder='Search for products...' onChange={(e) => setText(e.target.value)} className={style.search} />
                <BsSearch className={style.searchlogo} onClick={handleSearch} />
                <HiFilter  className={style.filter} />
            </div>

            <HStack className={style.home}>
                <FilterSection setData={setData} prod={prod} />
                <Box className={style.box}>

                    {
                        data?.map((el) => {
                            return <Products key={el.id} ele={el} />
                        })

                    }
                </Box>
            </HStack>
        </VStack>
    )
}

export default Home