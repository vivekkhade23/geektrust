import React from 'react'
import {Text,HStack} from "@chakra-ui/react"
import style from "./style.module.css"

const NewButton = ({qty,newQuantity,updateQty}) => {
   
const handlenewQtyinc=()=>{
  newQuantity(1)
  updateQty(1)
}
const handlenewQtydec=()=>{
  newQuantity(-1)
  updateQty(-1)
}

  return (
    <button backgroundColor={"black"} color={"white"} className={style.Newbutton}>
        <HStack backgroundColor={"black"} color={"white"}  className={style.Newbuttonstack}>

        <Text onClick={handlenewQtydec}>-</Text>
        <Text>{qty}</Text>
        <Text onClick={handlenewQtyinc}>+</Text>
        </HStack>
    </button>
  )
}

export default NewButton