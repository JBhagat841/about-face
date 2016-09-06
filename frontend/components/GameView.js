import { Component } from 'react';
import { Link } from 'react-router';
import ActiveCard from './ActiveCard';

class GameView extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <ActiveCard className="active-card" />
          </div>
        </div>
        <div className="row">
          <div className="offset-sm-4 col-sm-4">
            <Link to="done" className="btn btn-primary btn-block">Done</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default GameView;