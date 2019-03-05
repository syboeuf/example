import * as types from "../constants/actionTypes"

// state global
const initialState = {
    user: {
        id: "",
        firstName: "",
        lastName: "",
    },
}

const film = (state = initialState, action) => {
    // tu cree une variable, tu n'es pas obligé mais ca te permet de mieux regarder le résultat avec
    // un console.log() avant le return
    let newState = {}

    switch (action.type) {
        case types.SET_USER:
            newState = {
                ...state,
                user: action.dataUser,
            }
            return newState

        default:
            return state

    }
}

export default film
