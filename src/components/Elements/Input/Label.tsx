export interface LabelProps {
    htmlFor: string,
    text: string,
}

const Label = (props: LabelProps) => {
    return (
        <label 
            htmlFor={props.htmlFor}
            className="block text-slate-700 text-sm font-bold mb-2">
                {props.text}
        </label>
    )
}

export default Label