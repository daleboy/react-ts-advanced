import "./App.css";
import Header from "./components/Header";
import AddTimer from "./components/AddTimer";
import Timers from "./components/Timers"
import TimerContextProvider from "./components/store/timer-context";
function App() {
  return (
    <TimerContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerContextProvider>
  );
}


export default App;
