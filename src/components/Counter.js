import React, { Component } from "react";
import PropTypes from "prop-types";
import Dummy from "./Dummy";
import BetterDummy from "./BetterDummy";
import CounterButton from "./CounterButton";
import SimpleModal from "./Modal";
import { Button } from "@material-ui/core";
import { myModal } from "../ApendModal/CustomModal";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <hr />
        <CounterButton />
        <hr />
        <Dummy value={value} />
        <BetterDummy>{value}</BetterDummy>
        <hr />
        Clicked: {value} times
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
        <hr />
        <Button onClick={myModal.show} variant="contained">
          Default
        </Button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
