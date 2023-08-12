interface ButtonProps {
    title: string,
    variant: string
}

const Button = (props: ButtonProps) => {
    return (
        <button 
            className={`w-full h-10 px-6 font-semibold rounded-md text-white ${props.variant}`}
        >
            {props.title}
        </button>
    )
}

export default Button