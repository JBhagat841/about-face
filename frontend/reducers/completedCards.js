const initialState = [];

const completedCards = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPLETE_CARD':
      return [
        ...state,
        {
          image: action.image,
          text: action.text,
          result: action.result
        }
      ];
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
}

export default completedCards;