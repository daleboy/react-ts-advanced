import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Input id="name" label="name" type="text" />
      <Input id="age" label="age" type="number" />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="http://www.google.com">A Link</Button>
      </p>
    </main>
  );
}

export default App;
