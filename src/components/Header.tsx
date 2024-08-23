import { useTimerContext } from "./store/timer-context";
import Button from "./UI/Button";
export default function Header() {
  const timersCtx = useTimerContext();
    return (
      <header>
        <h1>ReactTimer</h1>
  
        <Button onClick={timersCtx.isRunning?timersCtx.stopTimer:timersCtx.startTimer}>{timersCtx.isRunning ? 'Stop':'Start'} Timers</Button>
      </header>
    );
  }
  