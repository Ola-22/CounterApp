import React from "react";
import "./style.css";
import * as math from "mathjs";

class Calculator extends React.Component {
  state = {
    input: "",
    evalOutput: 0,
  };
  handleInputString = (i) => {
    console.log(i);
    let input = this.state.input;
    input += i;
    this.setState({ input });
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  evalInput = (e) => {
    this.setState({
      input: this.state.input + "=" + math.evaluate(this.state.input),
    });
  };

  render() {
    return ("calc-wrapper">
        {/* <input type="number" placeholder="0" defaultValue={this.state.input} /> */}
        <div  }
}

export default Calculator;
