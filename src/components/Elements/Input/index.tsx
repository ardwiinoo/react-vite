import Label, { LabelProps } from "./Label"
import Input, { InputProps } from './Input';

type Props = {
    inputProps: InputProps,
    labelProps: LabelProps
}
const InputForm = (props: Props) => {

    const { inputProps, labelProps } = props

    return (
        <div className="mb-6">
            <Label {...labelProps} />
            <Input {...inputProps} />     
        </div>
    )
}

export default InputForm