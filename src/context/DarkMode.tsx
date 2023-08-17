import { createContext, useState } from 'react'

const DarkModeContext = createContext()

interface Props {
    children: React.ReactNode
}

const DarkModeContextProvider = (props: Props) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext
export default DarkModeContextProvider