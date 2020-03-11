import React from "react";
import "./styles.css";
import ErrorBoundary from "./ErrorBoundries";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Comp1 />
    </div>
  );
}

class Comp1 extends React.PureComponent {
  state = {
    counter: 0,
    emp: { name: "Mohan", salary: "2000" }
  };

  componentDidMount() {
    this.setState({ counter: 4 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    //   console.log(this.state, nextState);
    if (JSON.stringify(this.state.emp) != JSON.stringify(nextState.emp)) {
      return true;
    } else if (nextState.counter != this.state.counter) {
      return true;
    }
    return false;
  }

  clickHandler = () => {
    //this.setState(({ counter, emp }) => ({ counter: 5 }));
    this.setState({ emp: { ...this.state.emp, name: "Ajay" } });
  };
  render() {
    console.log("render - " + this.state.emp.name);
    return (
      <>
        <p>I am here... {this.state.counter}</p>
        <p>{this.state.emp.name}</p>
        <button onClick={this.clickHandler}>Click me</button>
      </>
    );
  }
}
