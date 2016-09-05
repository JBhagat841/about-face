import { Component } from 'react';
import { Link } from 'react-router';
import ActiveCard from './ActiveCard';

class GameView extends Component {
  render () {
    return (
      <div>
        <ActiveCard />
        <Link to="done" className="btn btn-primary">Done</Link>
      </div>
    )
  }
}

export default GameView;