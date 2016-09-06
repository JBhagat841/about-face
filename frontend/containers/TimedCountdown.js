import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Countdown from 'components/Countdown';

function mapStateToProps(state){
  let { secondsRemaining } = state.game;

  let stateProps = {
    value: secondsRemaining
  };
  return stateProps;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
