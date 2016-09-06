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
          <div className="offset-sm-2 col-sm-3">
            <Button onClick={onStartNewGame} className="btn btn-primary btn-block btn-bab">Yes</Button>
          </div>
          <div className="col-sm-3 offset-sm-2">
            <Link to="/" className="btn btn-outline-info btn-block btn-bab">No</Link>
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
