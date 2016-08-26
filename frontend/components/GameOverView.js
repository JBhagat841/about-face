import { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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

function getSucceededCardCount(cards) {
  return cards.filter(c => c.result == 'success').length;
}

function mapStateToProps(state){
  return {
    score: getSucceededCardCount(state.completedCards)
  };
}

export default connect(mapStateToProps, null)(GameOverView);
