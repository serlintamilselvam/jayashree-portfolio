import { combineReducers } from 'redux'

// Import reducers
import themeReducer from './theme'

const allReduers = combineReducers({
    theme: themeReducer
})

export default allReduers