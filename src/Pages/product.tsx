import { useEffect, useState } from "react"
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        image: "/images/laptop.jpg",
        title: "Laptop",
        price: 5000000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, laudantium pariatur beatae quibusdam similique nisi"
    },
    {
        id: 2,
        image: "/images/laptop.jpg",
        title: "Laptop Gimang",
        price: 10000000,
        description: "Lorem ipsum dolor sit amet, beatae quibusdam similique nisi"
    },
    {
        id: 3,
        image: "/images/laptop.jpg",
        title: "Laptop Dingin",
        price: 2000000,
        description: "Lorem ipsum dolor sit amet, beatae quibusdam similique nisi, Quasi, laudantium pariatur beatae quibusdam similique nisi"
    },
]

const email = localStorage.getItem('email')

interface InitialCart {
    id: number,
    qty: number
}

const ProductPage = () => {
    // Hooks
    const [cart, setCart] = useState<InitialCart[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {

        // pura pura fetch db
        setCart(JSON.parse(localStorage.getItem("cart") || '[]'))
    }, [])

    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id) 
                return acc + product!.price * item.qty
            }, 0)

            setTotalPrice(sum)

            // pura pura db
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])
    

    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')

        window.location.href = '/login'
    }

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

    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-6">
                {email}
                <div className="w-200 ml-5">
                    <Button title="Logout" variant="bg-black" onClick={handleLogout}></Button>
                </div>
            </div>
            <div className="flex justify-center py-5">
                {/* Rendering List */}
                <div className="w-4/6 flex flex-wrap">
                    {products.map((item) => (
                        <CardProduct key={item.id}>
                            <CardProduct.Header image={item.image} />
                            <CardProduct.Body title={item.title}>
                                {item.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={item.price} addToCart={() => handleAddToCart(item.id)}/>
                        </CardProduct>  
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-2">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product!.title}</td>
                                        <td>
                                            {product!.price.toLocaleString('id-ID', {
                                                style: 'currency', 
                                                currency: 'IDR'
                                            })}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            {(item.qty * product!.price).toLocaleString('id-ID', { 
                                                style: 'currency', 
                                                currency: 'IDR' 
                                            })}
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td>
                                    <b>{totalPrice.toLocaleString('id-ID', {
                                        style: 'currency', 
                                        currency: 'IDR'
                                    })}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )   
}

export default ProductPage