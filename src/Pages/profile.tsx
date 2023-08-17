import Navbar from "../components/Layouts/Navbar"
import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {

    const username = useLogin()

    return (
        <div>
            <Navbar />
            <h1>Profile {username} </h1>
        </div>
    )
}

export default ProfilePage