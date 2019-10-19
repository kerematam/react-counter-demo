import React, { Component } from "react";
import PropTypes from "prop-types";
import Dummy from "./Dummy";
import { CounterContext } from "./Context";

export default class CounterButton extends Component {
  render() {
    return (
      <CounterContext.Provider value={{counterValue : 1}}>
        <div>
          Counter Button with Contex API <Dummy />
        </div>
      </CounterContext.Provider>
    );
  }

  static propTypes = {
    value: PropTypes.number
  };
}
