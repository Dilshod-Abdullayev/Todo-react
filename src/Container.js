import React, { useContext } from "react";

import { ThemeContextprovider } from "./Context/ContextMode";

export default function Container() {
    const { state, toggle } = useContext(ThemeContextprovider)
    return (
        <div>
            {state ? 3 : '23333'}
            <button onClick={toggle} className="text-center text-4x bg-slate-500 rounded p-5">Modde</button>
        </div>
    )
}
