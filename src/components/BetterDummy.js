import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BetterDummy extends Component {
  render() {
    const { children } = this.props;
    return <div>This is better Dummy {children}</div>;
  }

  static propTypes = {
    value: PropTypes.number
  };
}
