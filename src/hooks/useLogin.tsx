import { useEffect, useState } from "react"
import { getUserName } from "../services/auth.service"

export const useLogin = () => {
    const [username, setUsername] = useState("")
    
    useEffect(() => {
        const token: string | null = localStorage.getItem("token")
        if(token) {
            setUsername(getUserName(token))
        } else {
            window.location.href = "/login"
        }
    }, [])

    return username
}