import { Ref, forwardRef } from "react"

export interface InputProps {
    type: string,
    placeholder: string,
    name: string
}

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
        <input  
            type={props.type}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            placeholder={props.placeholder}
            name={props.name}
            ref={ref} />
    )
})

export default Input