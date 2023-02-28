import Form from "./components/Form";
import "./index.css";
import { ContextMode } from "./Context/ContextMode";
import Container from "./Container";
import { DarkmodeContextProvider } from "./Context/DarkMode";
import { useContext } from "react";
export default function App() {
  const { mode } = useContext(DarkmodeContextProvider)
  return (
    <div className={`${mode}`}>
      <ContextMode>
        <Container />
        <Form />
      </ContextMode>
    </div>
  );
}
