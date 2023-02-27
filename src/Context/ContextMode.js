import React, { createContext, useState } from "react";
const ThemeContextprovider = createContext()
function ContextMode({ children }) {
    const [state, setState] = useState(true)
    const toggle = () => {
        setState(!state)
    }
    return (
        <ThemeContextprovider.Provider value={{ state, toggle }}>
            {children}
        </ThemeContextprovider.Provider>
    )
}
export { ContextMode, ThemeContextprovider }