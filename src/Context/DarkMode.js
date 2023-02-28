import React, { createContext, useState } from "react";
const DarkmodeContextProvider = createContext()
function DarkmodeContext({ children }) {
    const [rejim, setRejim] = useState(true)
    const [mode, setMode] = useState('bg-slate-800 text-white')
    const changeMode = () => {
        setRejim(!rejim)
        rejim ? setMode('bg-slate-800 text-white') : setMode('bg-slate-300 text-slate-800')
    }
    return (
        <DarkmodeContextProvider.Provider value={{ changeMode, mode, rejim }}>
            {children}
        </DarkmodeContextProvider.Provider>
    )
}
export { DarkmodeContext, DarkmodeContextProvider }