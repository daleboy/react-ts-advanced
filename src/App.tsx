import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import { useRef } from "react";
import {type FormHandler} from "./components/Form";
import Form from "./components/Form";

function App() {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const form = useRef<FormHandler>(null);
  function save(data: unknown) {
    const formData = data as { name: string; age: number };
    console.log(formData);
    if (name.current) {
      name.current.value = "";
    }
    form.current?.clear()
  }
  return (
    <Form ref={form} onSave={save}>
      <Input id="name" label="name" type="text" ref={name} />
      <Input id="age" label="age" type="number" ref={age} />
      {/* <p>
        <Button>submit</Button>
      </p> */}
      <p>
        <Button href="http://www.google.com">A Link</Button>
      </p>
      <p>
        <Container as={Button} type="submit">
          Click Me
        </Container>
      </p>
    </Form>
  );
}

export default App;
