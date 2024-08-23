import { useEffect, useState, useRef } from "react";
import Container from "./UI/Container";
import { useTimerContext } from "./store/timer-context";
export type TimerProps = {
  readonly name: string;
  readonly duration: number;
};
export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }
  const { isRunning } = useTimerContext();
  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) =>
          prevTime >= 50 ? prevTime - 50 : duration * 1000
        );
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning, duration]);
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <p>{name}</p>
      <p>
        <progress max={duration * 1000} value={remainingTime}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
