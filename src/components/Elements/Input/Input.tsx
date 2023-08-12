export interface InputProps {
    type: string,
    placeholder: string,
    name: string
}

const Input = (props: InputProps) => {
    return (
        <input 
            type={props.type}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            placeholder={props.placeholder}
            name={props.name} />
    )
}

export default Input