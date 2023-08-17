import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import ProductResponses from "../../interfaces/ProductResponses";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

interface Props {
    products: ProductResponses[]
}

const TableCart = (props: Props) => {

    const {isDarkMode} = useContext(DarkMode)

    // get store
    const cart = useSelector((state) => state.cart.data)
    const dispatch = useTotalPriceDispatch()
    const { total } = useTotalPrice()

    useEffect(() => {
        if(props.products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = props.products.find((product) => product.id === item.id) 
                return acc + product!.price * item.qty
            }, 0)

            // setTotalPrice(sum)
            dispatch({
                type: 'UPDATE',
                payload: {
                    total: sum
                }
            })

            // pura pura db
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart, props.products])

    const totalPriceRef = useRef<HTMLTableRowElement>(null)
    console.log(totalPriceRef)

    useEffect(() => {
        if(cart.length > 0 && totalPriceRef.current) {
            totalPriceRef.current.style.display = "table-row"
        } else if (totalPriceRef.current) {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart])

    return (
        <table className={`text-left table-auto border-separate border-spacing-x-2 ${isDarkMode && 'text-white'}`}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {props.products.length > 0 && cart.map((item) => {
                    const product = props.products.find((product) => product.id === item.id)
                    return (
                        <tr key={item.id}>
                            <td>{product!.title}</td>
                            <td>
                                {product!.price.toLocaleString('id-ID', {
                                    style: 'currency', 
                                    currency: 'USD'
                                })}
                            </td>
                            <td>{item.qty}</td>
                            <td>
                                {(item.qty * product!.price).toLocaleString('id-ID', { 
                                    style: 'currency', 
                                    currency: 'USD' 
                                })}
                            </td>
                        </tr>
                    )
                })}
                <tr ref={totalPriceRef}>
                    <td colSpan={3}><b>Total Price</b></td>
                    <td>
                        <b>{total.toLocaleString('id-ID', {
                            style: 'currency', 
                            currency: 'USD'
                        })}</b>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableCart