import { useContext, useEffect, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import { getProducts } from "../services/product.service"
import ProductResponses from "../interfaces/ProductResponses"
import { useLogin } from "../hooks/useLogin"
import TableCart from "../components/Fragments/TableCart"
import Navbar from "../components/Layouts/Navbar"
import { DarkMode } from "../context/DarkMode"

// const products = [
//     {
//         id: 1,
//         image: "/images/laptop.jpg",
//         title: "Laptop",
//         price: 5000000,
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, laudantium pariatur beatae quibusdam similique nisi"
//     },
//     {
//         id: 2,
//         image: "/images/laptop.jpg",
//         title: "Laptop Gimang",
//         price: 10000000,
//         description: "Lorem ipsum dolor sit amet, beatae quibusdam similique nisi"
//     },
//     {
//         id: 3,
//         image: "/images/laptop.jpg",
//         title: "Laptop Dingin",
//         price: 2000000,
//         description: "Lorem ipsum dolor sit amet, beatae quibusdam similique nisi, Quasi, laudantium pariatur beatae quibusdam similique nisi"
//     },
// ]

interface InitialCart {
    id: number,
    qty: number,
}

const ProductPage = () => {
    // useContext
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)

    // Hooks
    const [cart, setCart] = useState<InitialCart[]>([])
    const [products, setProducts] = useState<ProductResponses[]>([])

    useEffect(() => {
        // pura pura fetch db
        setCart(JSON.parse(localStorage.getItem("cart") || '[]'))
    }, [])

    useEffect(() => {
        // fetch db beneran
        getProducts((data: ProductResponses[]) => {
            setProducts(data)
        })
    }, [])

    // custom hooks
    useLogin()

    const handleAddToCart = (id: number) => {
        // cek dulu id 
        if(cart.find(item => item.id == id)) {
            setCart(
                cart.map((item) => item.id == id ? {...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([...cart, {id, qty: 1}])
        }
    }

    // useRef
    // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

    // const handleAddToCartRef = (id: number) => {
    //     cartRef.current = [...cartRef.current, {id, qty: 1}]
    //     localStorage.setItem("cart", JSON.stringify(cartRef.current))
    // }

    return (
        <>
            <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode && 'bg-slate-900'}`}>
                {/* Rendering List */}
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((item) => (
                        <CardProduct key={item.id}>
                            <CardProduct.Header image={item.image} id={item.id} />
                            <CardProduct.Body title={item.title}>
                                {item.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={item.price} id={item.id} addToCart={() => handleAddToCart(item.id)}/>
                        </CardProduct>  
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </>
    )   
}

export default ProductPage