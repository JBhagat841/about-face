import { Component } from 'react';
import { Link } from 'react-router';

class GameOverView extends Component {
  render () {
    const { score } = this.props;

    return (
      <div>
        <h1>Great Job!</h1>
        <p>You got {score}!</p>
        <Link to="/" className="btn btn-outline-primary">Start Over</Link>
      </div>
    )
  }
}

export default GameOverView;