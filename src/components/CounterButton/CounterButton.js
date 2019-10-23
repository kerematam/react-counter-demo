import React, { Component } from "react";
import Dummy from "./Dummy";
import { CounterContext } from "./Context";

class ImpureDiv extends Component {
  render() {
    console.log("Render impure div");
    return <div>{this.props.counterValue}</div>;
  }
}

class PureDiv extends React.PureComponent {
  render() {
    console.log("Render pure div");
    return <div>{this.props.counterValue}</div>;
  }
}

export default class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.increaseCounter = () => {
      this.setState(prevState => ({
        context: {
          counterValue: prevState.context.counterValue + 1,
          increaseCounter: prevState.context.increaseCounter
        }
      }));
    };
    this.state = {
      context: {
        counterValue: 2,
        increaseCounter: this.increaseCounter
      }
    };
  }

  render() {
    const { counterValue, increaseCounter } = this.state.context;

    return (
      <React.Fragment>
        <ImpureDiv counterValue={counterValue} />
        <PureDiv counterValue={counterValue} />
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          Force Render
        </button>
        <hr />
        <CounterContext.Provider value={this.state.context}>
          <div>
            Counter Button with Contex API <Dummy />
          </div>
        </CounterContext.Provider>
      </React.Fragment>
    );
  }
}
