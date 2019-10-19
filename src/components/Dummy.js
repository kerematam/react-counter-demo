import React, { Component } from "react";
import PropTypes from "prop-types";
import PresentDummy from "./PresentDummy";

export default class Dummy extends Component {
  render() {
    const { value } = this.props;
    return <PresentDummy value={value} />;
  }

  propTypes = {
    value: PropTypes.number
  };
}
