import React, { useContext } from 'react'
import { VStack, Text, HStack } from "@chakra-ui/react"
import style from "./style.module.css"
import { useState } from 'react'
import { CartContext } from '../Context/cartContext'
import { useEffect } from 'react'


const FiltersSection = ({ setData, prod }) => {
    const [filt, setfilt] = useState({ Red: false, Blue: false, Green: false, Men: false, Women: false, upto250: false, btw250450: false, above450: false, Polo: false, Hoodie: false, Basic: false })

    useEffect(() => {
        const newData = prod?.filter((el) => {
            if (filt.Red === true && el.color === "Red") {
                return true;
            }
            if (filt.Blue === true && el.color === "Blue") {
                return true;
            }
            if (filt.Green === true && el.color === "Green") {
                return true;
            }
            if (filt.Men === true && el.gender === "Men") {
                return true;
            }
            if (filt.Women === true && el.gender === "Women") {
                return true;
            }
            if (filt.upto250 === true && el.price <= 250) {
                return true;
            }
            if (filt.btw250450 === true && el.price > 250 && el.price <= 450) {
                return true;
            }
            if (filt.above450 === true && el.price > 450) {
                return true;
            }
            if (filt.Polo === true && el.type === "Polo") {
                return true;
            }
            if (filt.Hoodie === true && el.type === "Hoodie") {
                return true;
            }
            if (filt.Basic === true && el.type === "Basic") {
                return true;
            }
            if (filt.Basic === false && filt.Polo === false && filt.Hoodie === false && filt.above450 === false && filt.btw250450 === false && filt.upto250 === false && filt.Women === false && filt.Men === false && filt.Red === false && filt.Blue === false && filt.Green === false) {
                return el;
            }
            return false;
        });
        setData(newData)
    }, [filt])

    return (

        <div className={style.filterBox}>
            <label className={style.label}>Colour</label>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Red: e.target.checked })} type={'checkbox'} />
                <Text>Red</Text>
            </HStack>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Blue: e.target.checked })} type={'checkbox'} />
                <Text>Blue</Text>
            </HStack>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Green: e.target.checked })} type={'checkbox'} />
                <Text>Green</Text>
            </HStack>
            <label className={style.label}>Gender</label>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Men: e.target.checked })} type={'checkbox'} />
                <Text>Male</Text>
            </HStack>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Women: e.target.checked })} type={'checkbox'} />
                <Text>Female</Text>
            </HStack>
            <label className={style.label}>Price</label>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, upto250: e.target.checked })} type={'checkbox'} />
                <Text>0-Rs250</Text>
            </HStack>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, btw250450: e.target.checked })} type={'checkbox'} />
                <Text>Rs251-450</Text>
            </HStack>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, above450: e.target.checked })} type={'checkbox'} />
                <Text>Rs450+</Text>
            </HStack>

            <label className={style.label}>Type</label>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Polo: e.target.checked })} type={'checkbox'} />
                <Text>Polo</Text>
            </HStack>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Hoodie: e.target.checked })} type={'checkbox'} />
                <Text>Hoddie</Text>
            </HStack>
            <HStack className={style.checkbox}>
                <input onChange={(e) => setfilt({ ...filt, Basic: e.target.checked })} type={'checkbox'} />
                <Text>Basic</Text>
            </HStack>
        </div>

    )
}

export default FiltersSection