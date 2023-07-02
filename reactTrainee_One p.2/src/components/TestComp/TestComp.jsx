import "./TestComp.css";
import React, { createRef } from "react";

export default class TestComp extends React.Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  state = { inputText: "" };

  changeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  focusInput = () => {
    this.input.current.focus();
  };

  // static getDerivedStateFromProps(this.props, this.state) {
  //   console.log("getDerivedStateFromProps");
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(this.props);
    console.log("shouldComponentUpdate");
    if (this.props.color === nextProps.color) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <>
        <form>
          <input ref={this.input} onChange={this.changeHandler} />
          <button disabled={this.state.inputText === "реакт"}>Отправить</button>
        </form>
        <button onClick={this.focusInput}>Фокус</button>
      </>
    );
  }

  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
