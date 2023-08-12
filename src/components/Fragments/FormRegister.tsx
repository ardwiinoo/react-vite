import InputForm from '../Elements/Input/index';
import Button from '../Elements/Button/index';

const FormRegister = () => {
    return (
        <form action="">
             <InputForm 
                inputProps={{ name: 'fullname', type: 'text', placeholder: 'Eullname' }}
                labelProps={{ text: 'Fullname', htmlFor: 'fullname' }}  />
            <InputForm 
                inputProps={{ name: 'email', type: 'text', placeholder: 'Email' }}
                labelProps={{ text: 'Email', htmlFor: 'email' }}  />
            <InputForm 
                inputProps={{ name: 'password', type: 'password', placeholder: 'Password' }}
                labelProps={{ text: 'Password', htmlFor: 'password' }}  />
             <InputForm 
                inputProps={{ name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' }}
                labelProps={{ text: 'Confirm Password', htmlFor: 'confirmPassword' }}  />
            <Button
                title="Register"
                variant="bg-blue-500"
            ></Button>
        </form>
    )
}

export default FormRegister