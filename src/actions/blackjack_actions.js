// fetchDeck
// setAICards
// setUserCards
// hitAI
// hitUser

function randomNum(array){
  var numOne = array[Math.floor(Math.random()*array.length)];
  return numOne
}


export function fetchDeck() {
  return {type: 'FETCH_DECK'}
}

export function setAICards(deck) {
  return {type: 'SET_AI_CARDS', payload: [randomNum(deck), randomNum(deck)]}
}

export function setUserCards(deck) {
  return {type: 'SET_USER_CARDS', payload: [randomNum(deck), randomNum(deck)]}
}

export function hitAI(deck) {
  return {type: 'HIT_AI', payload: [randomNum(deck)]}
}

export function hitUser() {
  return {type: 'HIT_USER', payload: [randomNum(deck)]}
}
