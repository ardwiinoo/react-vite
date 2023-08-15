import InputForm from '../Elements/Input/index';
import Button from '../Elements/Button/index';
import { useRef } from 'react';
import { useEffect } from 'react';

const FormLogin = () => {

    // event handler
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value
        const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value

        // local storage
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        
        window.location.href = '/products'
    }

    const emailRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        emailRef.current?.focus()
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <InputForm 
                ref={emailRef}
                inputProps={{ name: 'email', type: 'text', placeholder: 'Email' }}
                labelProps={{ text: 'Email', htmlFor: 'email' }}  />
            <InputForm 
                inputProps={{ name: 'password', type: 'password', placeholder: '******' }}
                labelProps={{ text: 'password', htmlFor: 'password' }}  />
            <Button
                title="Login"
                variant="bg-blue-500"
                type="submit"
            ></Button>
        </form>
    )
}

export default FormLogin