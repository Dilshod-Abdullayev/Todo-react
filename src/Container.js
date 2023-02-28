import React, { useContext, useState } from "react";
import { ThemeContextprovider } from "./Context/ContextMode";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { DarkmodeContextProvider } from "./Context/DarkMode";

export default function Container() {
    const { mode, changeMode, rejim } = useContext(DarkmodeContextProvider)
    const { search, setSearch } = useContext(ThemeContextprovider)
    const handle = () => {
        setSearch(search)
    }
    console.log(mode);
    return (
        <div className="flex justify-center p-3">
            <button onClick={changeMode}> {rejim ? <BsFillSunFill /> : <BsFillMoonFill />}</button>
            <input className="rounded border-2" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handle} className="text-center text-4x bg-slate-500 rounded p-2 text-yellow-50 text-4xl">Search</button>
        </div>
    )
}