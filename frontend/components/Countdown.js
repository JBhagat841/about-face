import { Component, PropTypes } from 'react';

class Countdown extends Component {
  render () {
    const { value } = this.props;

    return (
      <div>
        <div className="countdown">
          <span>{value}</span>
        </div>
      </div>
    );
  }
}

export default Countdown;
