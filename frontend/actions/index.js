export const succeedCard = (image, text) => {
  return {
    type: 'COMPLETE_CARD',
    image: image,
    text: text,
    result: 'success'
  }
}

export const passCard = (image, text) => {
  return {
    type: 'COMPLETE_CARD',
    image: image,
    text: text,
    result: 'pass'
  }
}

export const incrementScore = () => {
  return {
    type: 'INCREMENT_SCORE'
  }
}