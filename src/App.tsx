import "./App.css";
import Header from "./components/Header";
import AddTimer from "./components/AddTimer";
import Timers from "./components/Timers"
function App() {
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </>
  );
}


export default App;
