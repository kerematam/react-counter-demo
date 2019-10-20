import React, { Component } from "react";
import Dummy from "./Dummy";
import { CounterContext } from "./Context";

export default class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.increaseCounter = () => {
      this.setState(({ counterValue: value }) => ({
        counterValue: value + 1
      }));
    };
    this.state = {
      counterValue: 2,
      increaseCounter: this.increaseCounter
    };
  }

  render() {
    const { counterValue, increaseCounter } = this.state;
    
    return (
      <>
        <CounterContext.Provider value={{ counterValue, increaseCounter }}>
          <div>
            Counter Button with Contex API <Dummy />
          </div>
        </CounterContext.Provider>
      </>
    );
  }
}
