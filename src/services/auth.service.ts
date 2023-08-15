import axios from "axios";
import LoginResponses from "../interfaces/LoginResponses";
import jwtDecode from "jwt-decode";

export const login = (data: LoginResponses, callback: (status: boolean, token: string) => void) => {
    axios.post('https://fakestoreapi.com/auth/login', data)
        .then((res) => {
            callback(true, res.data.token)
        })
        .catch((error) => {
            callback(false, error)
        })
}

export const getUserName = (token: string) => {
    const decoded = jwtDecode(token)
    console.log(decoded)
    return decoded.user
}