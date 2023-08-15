import Label, { LabelProps } from "./Label"
import Input, { InputProps } from './Input';
import { forwardRef } from 'react';
import { Ref } from 'react';

type Props = {
    inputProps: InputProps,
    labelProps: LabelProps
}
const InputForm = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {

    const { inputProps, labelProps } = props

    return (
        <div className="mb-6">
            <Label {...labelProps} />
            <Input {...inputProps} ref={ref}/>     
        </div>
    )
})

export default InputForm