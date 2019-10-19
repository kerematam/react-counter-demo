import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BetterDummy extends Component {
  render() {
    const { children } = this.props;
    return <p>This is better Dummy {children}</p>;
  }

  propTypes = {
    value: PropTypes.number
  };
}
