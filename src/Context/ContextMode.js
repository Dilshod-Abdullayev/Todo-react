import React, { createContext, useState } from "react";
const ThemeContextprovider = createContext()
function ContextMode({ children }) {
    const [search, setSearch] = useState([])
    return (
        <ThemeContextprovider.Provider value={{ search, setSearch }}>
            {children}
        </ThemeContextprovider.Provider>
    )
}
export { ContextMode, ThemeContextprovider }