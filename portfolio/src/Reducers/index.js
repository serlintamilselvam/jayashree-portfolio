import { combineReducers } from 'redux'

// Import reducers
import { reducer as toastrReducer } from 'react-redux-toastr'
import themeReducer from './theme'
import loaderReducer from './loader'

const allReduers = combineReducers({
    toastr: toastrReducer,
    theme: themeReducer,
    loader: loaderReducer
})

export default allReduers