import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    // this.setState({ counter: 1 });
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

export default Counter;
