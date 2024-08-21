import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";

function App() {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="name" type="text" ref={name} />
      <Input id="age" label="age" type="number" ref={age} />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="http://www.google.com">A Link</Button>
      </p>
      <p>
        <Container as={Button}  type="button">Click Me</Container>
      </p>
    </main>
  );
}

export default App;
