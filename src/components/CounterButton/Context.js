import { createContext } from "react";

// This will only be used if no provider is called on parent
export const CounterContext = createContext({
  counterValue: 1,
  increaseCounter: () => {}
});
