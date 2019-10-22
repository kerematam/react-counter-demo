import React from "react";

const DeepText = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} />
));

export default class TextForm extends React.Component {
  textInput = React.createRef();
  deepInput = React.createRef();

  focusTextInput = () => {
    // this.textInput.current.focus();
    this.deepInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        >
          Focus the text input
        </button>
        <DeepText ref={this.deepInput} />
      </div>
    );
  }
}
