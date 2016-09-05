import { push } from 'react-router-redux';
import { imageSearch } from 'utils/imageSearch';
import { randomNoun } from 'data';

export const completeCard = (image, text, result) => {
  return {
    type: 'COMPLETE_CARD',
    image: image,
    text: text,
    result: result
  }
}

export const succeedCard = (image, text) => {
  return (dispatch, getState) => {
    const { currentCard } = getState();

    dispatch(completeCard(currentCard.card.image, currentCard.card.text, 'success'));
    dispatch(getNewCard());
  }
}

export const passCard = (image, text) => {
  return (dispatch, getState) => {
    const { currentCard } = getState();

    dispatch(completeCard(currentCard.card.image, currentCard.card.text, 'pass'));
    dispatch(getNewCard());
  }
}

export const resetGame = () => {
  return {
    type: 'RESET_GAME'
  }
}

export const initNewGame = () => {
  return (dispatch, getState) => {
    dispatch(resetGame());
    dispatch(getNewCard());
    dispatch(push('/game'));
  }
}

export const setCurrentCard = (image, text) => {
  return {
    type: 'SET_CURRENT_CARD',
    image: image,
    text: text,
    result: ''
  }
}

export const getNewCard = () => {
  return (dispatch, getState) => {
    let noun = randomNoun();
    dispatch(setCurrentCard(`/images/${noun}.jpg`, noun));
    // Get a card from the search API and show the first result
    // let xhr = imageSearch(noun);

    // xhr.done((data) => {
    //   // Use data.items[0].link
    //   // for the image URL and push a new current card
    //   dispatch(setCurrentCard(data.items[0].link, noun));
    // });
  }
}