import { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Button from './Button';
import { initNewGame } from 'actions';

class GameSetupView extends Component {
  render () {
    const { onStartNewGame } = this.props;

    return (
      <div>
        <h1>New Game - Ready?</h1>
        <Button onClick={onStartNewGame}>Yes</Button>
        <Link to="/" className="btn btn-outline-secondary">No</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    onStartNewGame: initNewGame
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(GameSetupView);
