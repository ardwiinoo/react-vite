import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            <p className="text-sm mt-5 text-center">
                Have account? 
                <Link to="/login" className="px-2 font-bold text-blue-600">Login Here</Link>
            </p>
        </AuthLayout>
    )
}

export default RegisterPage