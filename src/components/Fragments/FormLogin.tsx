import InputForm from './../Elements/Input/index';
import Button from './../Elements/Button/index';

const FormLogin = () => {
    return (
        <form action="">
            <InputForm 
                inputProps={{ name: 'email', type: 'text', placeholder: 'Email' }}
                labelProps={{ text: 'Email', htmlFor: 'email' }}  />
            <InputForm 
                inputProps={{ name: 'password', type: 'password', placeholder: 'password' }}
                labelProps={{ text: 'password', htmlFor: 'password' }}  />
            <Button
                title="Login"
                variant="bg-blue-500"
            ></Button>
        </form>
    )
}

export default FormLogin