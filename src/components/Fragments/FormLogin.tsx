import InputForm from '../Elements/Input/index';
import Button from '../Elements/Button/index';

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

    return (
        <form onSubmit={handleLogin}>
            <InputForm 
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