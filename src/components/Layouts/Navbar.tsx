import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)
    const username = useLogin()
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    const { total } = useTotalPrice()

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)

        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('token')

        window.location.href = '/login'
    }

    return (
        <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-6">
            {username}
            <div className="w-200 ml-5">
                <Button title="Logout" variant="bg-black" onClick={handleLogout}></Button>
            </div>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
                Item: {totalCart} | Price: $ {total} 
            </div>
            <div className="w-200 ml-5">
                <Button title={isDarkMode ? "Light" : "Dark" } variant="bg-black"  onClick={() => setIsDarkMode(!isDarkMode)}></Button>
            </div>
        </div>
    )
}

export default Navbar