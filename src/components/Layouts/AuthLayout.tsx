import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkMode } from "../../context/DarkMode"

interface Props {
    children: React.ReactNode,
    title: string,
    type: string
}

const AuthLayout = (props: Props) => {

    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    console.log(isDarkMode)

    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && 'bg-slate-900'}`}>
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl font-bold mb-2">{props.title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details...
                </p>
                {props.children}
                <p className="text-sm mt-5 text-center">
                
                {/* using Ternary */}
                {props.type === 'login' ? 'Dont have an account?' : 'Already have an account?'}
                
                {/* using single condition */}
                {props.type === 'login' && (
                    <Link to="/register" className="px-2 font-bold text-blue-600">Register Here</Link>
                )}

                {props.type === 'register' && (
                    <Link to="/login" className="px-2 font-bold text-blue-600">Login Here</Link>
                )}

                {/* Bisa juga pakai if else */}
            </p>
            </div>
        </div>
    )
}

export default AuthLayout