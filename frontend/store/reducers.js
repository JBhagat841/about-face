import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { completedCards, currentCard, game } from 'reducers'

export const makeRootReducer = () => {
  return combineReducers({
    currentCard,
    completedCards,
    game,
    routing
  })
}

export default makeRootReducer;