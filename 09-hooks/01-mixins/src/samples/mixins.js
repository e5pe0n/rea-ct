import React from 'react';

const CounterMixin = {
  getInitialState: () => ({ count: 0 }),
  reset: () => {
    this.setState({ count: 0 });
  },
  increment: () => {
    this.setState((state) => ({ count: state.count + 1 }));
  },
  componentDidUpdate: () => {
    if (this.state.count > this.props.max) this.reset();
  },
};

const CounterComponent = React.createClass({
  propTypes: {
    max: React.PropTypes.number.isRequired,
  },
  mixins: [CounterMixin],

  render: () => () => {
    const { count } = this.state;

    return (
      <div>
        <div>
          {count} / {max}
        </div>
        <button onClick={reset} type="button">
          Reset
        </button>
        <button onClick={increment} type="button">
          +1
        </button>
      </div>
    );
  },
});

export default CounterComponent;
