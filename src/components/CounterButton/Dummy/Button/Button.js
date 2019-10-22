import React, { Component, useContext } from "react";
import { CounterContext } from "../../Context";

const WithUseContext = () => {
  const { counterValue } = useContext(CounterContext);

  return <div>This is with useContext {counterValue}</div>;
};

class UseInLifeCycles extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      initialValue: this.context.counterValue
    };
  }

  componentDidMount() {
    console.log({ componentDidMount: this.context });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log({
      componentWillReceiveProps: {
        context: this.context,
        nextContext
      }
    });
  }

  render() {
    return <div>This is from constructor : {this.state.initialValue}</div>;
  }

  static contextType = CounterContext;
}

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
        <UseInLifeCycles />
        <WithUseContext />
      </>
    );
  }

  static contextType = CounterContext;
}
