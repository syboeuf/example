import * as constants from "../constants/actionTypes"

export const setUser = (dataUser) => ({
    type: constants.SET_USER, dataUser,
})
