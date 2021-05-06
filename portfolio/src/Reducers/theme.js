import { THEME } from '../Actions/actionTypes'

const initialState = {
    isDarkTheme: true
}

const themeReducer = (state = initialState, action) => {

    switch(action.type) {
        case THEME.updated:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme
            }
        default: 
            return state
    }

}

export default themeReducer