import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    return (
      <div>
        <div>{this.state.result}</div>
        <input />
        <input />
        <button>CLEAR</button>
        <br />
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
    );
  }
}

export default Calculator;
