import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkmodeContext } from "./Context/DarkMode";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DarkmodeContext>
        <App />
    </DarkmodeContext>
);
