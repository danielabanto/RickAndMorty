import { combineReducers } from 'redux'
import characterReducer from './characterReducer'
import episodeReducer from './episodeReducer'
// import locationReducer from './locationReducer'

export default combineReducers({
    characterReducer,
    episodeReducer
    // locationReducer
})