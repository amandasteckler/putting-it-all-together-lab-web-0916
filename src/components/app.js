import { createStore } from '../store';
import { fetchDeck } from '../actions/blackjack_actions'
import { setAICards } from '../actions/blackjack_actions'
import { setUserCards } from '../actions/blackjack_reducer'
import { blackjack_reducer } from '../reducers/blackjack_reducer'

const store = createStore(blackjack_reducer)

fetchDeck()
setAICards(this.state.deck)
setUserCards()
