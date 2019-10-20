import React, { Component } from "react";
import { CounterContext } from "../../Context";

const CounterDisplayOnFunctionalComponent = () => (
  <CounterContext.Consumer>
    {({ counterValue }) => (
      <div>
        You can use Consumer when you want to access contex variables from
        functional components : {counterValue}
      </div>
    )}
  </CounterContext.Consumer>
);

export default class Button extends Component {
  render() {
    const { counterValue, increaseCounter } = this.context;
    return (
      <>
        <button
          onClick={() => {
            increaseCounter();
          }}
        >
          Button Value : {counterValue}
        </button>
        <CounterDisplayOnFunctionalComponent />
      </>
    );
  }

  static contextType = CounterContext;
}
