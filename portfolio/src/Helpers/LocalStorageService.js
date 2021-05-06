
export const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err) {
        console.log("Error occured while storing ", err)
    }
}


export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(err) {
        return undefined
    }
}