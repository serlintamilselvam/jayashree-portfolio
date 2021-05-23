import { LOADER } from '../Actions/actionTypes'

const intialState = {
    isLoaderShown: false
}

const loaderReducer = (state = intialState, action) => {

    switch(action.type) {
        case LOADER.show:
            return {
                ...state,
                isLoaderShown: true
            }
        case LOADER.hide: 
            return {
                ...state,
                isLoaderShown: false
            }
        default:
            return state
    }
}

export default loaderReducer