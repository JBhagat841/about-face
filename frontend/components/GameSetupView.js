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
      <div className="title-screen">
        <div className="row">
          <div className="col-sm-12">
            <h1>Ready?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Button onClick={onStartNewGame} className="btn btn-primary btn-block">Yes</Button>
          </div>
          <div className="col-sm-4 offset-sm-8">
            <Link to="/" className="btn btn-outline-secondary btn-block">No</Link>
          </div>
        </div>
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
