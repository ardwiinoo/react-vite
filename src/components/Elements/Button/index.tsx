interface ButtonProps {
    title: string,
    variant: string,
    type?: ButtonType,
    onClick?: () => void
}

type ButtonType = "button" | "submit" | "reset"

const Button = (props: ButtonProps) => {
    return (
        <button 
            type={props.type}
            className={`w-full h-10 px-6 font-semibold rounded-md text-white ${props.variant}`}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default Button