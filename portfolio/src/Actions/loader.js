import { LOADER } from './actionTypes'

export const LoaderShown = (isLoaderShown) => {
    return {
        type: LOADER.show,
        payload: {
            isLoaderShown
        }
    }
}

export const LoaderHidden = (isLoaderShown) => {
    return {
        type: LOADER.hide,
        payload: {
            isLoaderShown
        }
    }
}