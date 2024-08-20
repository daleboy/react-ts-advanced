import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Input id="name" label="name" type="text" />
      <Input id="age" label="age" type="number" />
      <p>
        <Button el="button">Button</Button>
      </p>
      <p>
        <Button el="anchor" href="http://www.google.com">Link</Button>
      </p>
    </main>
  );
}

export default App;
