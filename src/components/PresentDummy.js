import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PresentDummy extends Component {
  render() {
    const { value } = this.props;
    return <span> Value from Dummy Chain : {value}</span>;
  }

  static propTypes = {
    value: PropTypes.number
  };
}
