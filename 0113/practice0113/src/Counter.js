import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  render() {
    const { num } = this.state;

    return (
      <div>
        <h1>{num}</h1>
        <button
          onClick={() => {
            this.setState({ num: num + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
