import { Component } from 'react';
import { Link } from 'react-router';
import Card from './Card';

class GameView extends Component {
  render () {
    return (
      <div>
        <Card image="http://images.clipartpanda.com/cards-20clip-20art-playing-card2.png" title="Cards" />
        <Link to="done" className="btn btn-primary">Done</Link>
      </div>
    )
  }
}

export default GameView;