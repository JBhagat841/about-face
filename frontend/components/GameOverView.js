import { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Card from './Card';
import { resetAll } from 'actions';

class GameOverView extends Component {
  render () {
    const { score, cards, onResetGame } = this.props;

    return (
      <div>
        <h1>Great Job!</h1>
        <p>You got {score}!</p>
        <Link to="/" className="btn btn-outline-primary">Start Over</Link>
        {
          cards.map((card, index) => <Card key={index} image={card.image} text={card.text} result={card.result} />)
        }
      </div>
    )
  }
}

function getSucceededCardCount(cards) {
  return cards.filter(c => c.result == 'success').length;
}

function mapStateToProps(state){
  return {
    score: getSucceededCardCount(state.completedCards),
    cards: state.completedCards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    onResetGame: resetAll,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOverView);
