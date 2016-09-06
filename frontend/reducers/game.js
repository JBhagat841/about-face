const initialState = {
  secondsRemaining: 30,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'TIMER_TICK':
      return Object.assign({}, state, {
        secondsRemaining: state.secondsRemaining > 0 ? state.secondsRemaining - 1 : 0
      });
    default:
      return state;
  }
}

export default game;