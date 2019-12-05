import React from "react";
import ReactDOM from "react-dom";
import { myModal } from "./CustomModal";

export function modalHandler(CustomModal) {
  const div = document.createElement("div");

  this.hide = () => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  this.show = props => {
    document.body.appendChild(div);
    ReactDOM.render(<CustomModal {...props} onClose={this.hide} />, div);
  };

  return {
    show: this.show,
    hide: this.hide
  };
}
