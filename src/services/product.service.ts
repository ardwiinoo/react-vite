import axios from "axios";
import ProductResponses from "../interfaces/ProductResponses";

export const getProducts = (callback: (data: ProductResponses[]) => void) => {
    axios.get('https://fakestoreapi.com/products')
        .then(res => {
            callback(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getDetailProduct = (id: string, callback: (data: ProductResponses) => void) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            callback(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
}