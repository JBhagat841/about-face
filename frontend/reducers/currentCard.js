const initialState = {
  image: "",
  text: "",
  result: ""
};

const currentCard = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      return {
        image: action.image,
        text: action.text,
        result: action.result
      };
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
}

export default currentCard;