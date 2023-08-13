import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="text-sm mt-5 text-center">
                Don't have account? 
                <Link to="/register" className="px-2 font-bold text-blue-600">Register Here</Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage