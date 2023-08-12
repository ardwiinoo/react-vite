import React from 'react'

class Button extends React.Component {
  render(): React.ReactNode {
      return (
        <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white">
          Click
        </button>
      )
  }
}

const ButtonBlack = () => {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
      Click
    </button>
  )
}

interface Props {
  color?: string,
  text?: string
}

const ButtonCustom = (props: Props) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${props.color ? props.color : 'bg-slate-700'} text-white`}>
       {props.text ? props.text : 'Tombol' }
    </button>
  )
}

const AppOld = () => {
  return (
    <div className="flex justify-center bg-blue-500 min-h-screen items-center">
      <div className='flex gap-4'>
        <Button />
        <Button />
        <Button />
        <ButtonBlack />
        <ButtonCustom color='bg-red-700' text='Login'/>
        <ButtonCustom color='bg-amber-700' text='Register'/>
        <ButtonCustom />
      </div>
    </div>
  )
}

export default AppOld