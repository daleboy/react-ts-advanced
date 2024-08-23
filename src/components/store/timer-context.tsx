import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

type TimerContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimerContextValue | null>(null);

export function useTimerContext() {
  const timerCtx = useContext(TimersContext);
  if (timerCtx === null) {
    throw new Error("TimerContext is null - that should not be the case!");
  }
  return timerCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type TimerStartAction = {
  type: "START_ACTION";
};
type TimerStopAction = {
  type: "STOP_ACTION";
};
type TimerAddAction = {
  type: "ADD_ACTION";
  payload: Timer;
};

type Action = TimerStartAction | TimerStopAction | TimerAddAction;

function TimersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === "START_ACTION") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_ACTION") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_ACTION") {
    return {
      ...state,
      isRunning: false,
      timers: [...state.timers, action.payload],
    };
  }

  return state;
}
//创建context实例，并且封装到一个component里面供其它component使用
function TimerContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(TimersReducer, initialState);

  //创建一个context实例
  const ctx: TimerContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_ACTION", payload: timerData });
    },
    startTimer() {
      dispatch({ type: "START_ACTION" });
    },
    stopTimer() {
      dispatch({ type: "STOP_ACTION" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
export default TimerContextProvider;
