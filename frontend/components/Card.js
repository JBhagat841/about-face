import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Button from './Button';
import { succeedCard, passCard } from 'actions';

class Card extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onPass: PropTypes.func.isRequired
  };

  render () {
    const { image, text, onSuccess, onPass } = this.props;

    return (
      <div className="card game-card">
        <img width="100%" className="card-img-top" src={image} />
        <div className="card-block">
          <p className="card-text">{text}</p>
          <Button onClick={onSuccess}>Got It</Button>
          <Button onClick={onPass}>Pass</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  let { image, text } = state.currentCard.card;

  let stateProps = {
    image,
    text
  };
  return stateProps;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    onSuccess: succeedCard,
    onPass: passCard
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
