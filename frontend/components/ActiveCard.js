import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Button from './Button';
import Card from './Card';
import { succeedCard, passCard } from 'actions';

class ActiveCard extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onPass: PropTypes.func.isRequired
  };

  render () {
    const { image, text, onSuccess, onPass } = this.props;

    return (
      <div>
        <div className="successPad" onClick={onSuccess} />
        <div className="passPad" onClick={onPass} />
        <Card image={image} text={text} className="active-card" />
      </div>
    );
  }
}

function mapStateToProps(state){
  let { image, text } = state.currentCard;

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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCard);
