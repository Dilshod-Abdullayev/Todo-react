import Form from "./components/Form";
import "./index.css";
import { ContextMode } from "./Context/ContextMode";
import Container from "./Container";
export default function App() {

  return (
    <div className="">
      <ContextMode>
        <Container/>
        <Form />
        
      </ContextMode>
    </div>
  );
}
