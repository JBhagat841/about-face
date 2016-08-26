const initialState = {
  secondsRemaining: 30,
  card: {
    image: "",
    text: "",
    result: ""
  }
};

const currentCard = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      return {
        secondsRemaining: 30,
        card: {
          image: action.image,
          text: action.text,
          result: action.result
        }
      };
    case 'COMPLETE_CARD':
      return initialState;
    case 'RESET_GAME':
      return initialState;
    case 'TIMER_TICK':
      return Object.assign({}, state, {
        secondsRemaining: state.secondsRemaining > 0 ? state.secondsRemaining - 1 : 0
      });
    default:
      return state;
  }
}

export default currentCard;