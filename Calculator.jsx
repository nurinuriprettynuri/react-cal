import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: "", num2: "" };
    this.setNums = this.setNums.bind(this);
    this.clr = this.clr.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.mul = this.mul.bind(this);
    this.div = this.div.bind(this);
  }

  setNums(e, target) {
    let hey = parseInt(e.target.value);
    this.setState({ [target]: hey ? hey : "" });
  }

  clr(e) {
    e.preventDefault();
    this.setState({ result: 0, num1: "", num2: "" });
  }

  add(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  subtract(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 - this.state.num2 });
  }

  mul(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 * this.state.num2 });
  }

  div(e) {
    e.preventDefault();
    this.setState({ result: this.state.num1 / this.state.num2 });
  }

  render() {
    return (
      <div>
        <div>{this.state.result}</div>
        <input
          type="text"
          //   value={this.state.num1}
          onChange={e => {
            this.setNums(e, "num1");
          }}
        />
        <input
          type="text"
          value={this.state.num2}
          onChange={e => this.setNums(e, "num2")}
        />
        <button onClick={this.clr}>CLEAR</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.mul}>*</button>
        <button onClick={this.div}>/</button>
      </div>
    );
  }
}

export default Calculator;
