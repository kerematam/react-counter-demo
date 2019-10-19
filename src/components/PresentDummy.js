import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PresentDummy extends Component {
  render() {
    const { value } = this.props;
    return <p> Value from Dummy Chain : {value}</p>;
  }

  propTypes = {
    value: PropTypes.number
  };
}
