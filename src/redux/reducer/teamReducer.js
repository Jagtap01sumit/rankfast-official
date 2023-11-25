import { actionTypes } from "../action/actionTypes";

const initialState = {
    team: null,
    error: false
}

export const teamReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_TEAM_SUCCESS:
            return { ...state, team: payload, error: false }

        case actionTypes.GET_TEAM_FAILURE:
            return { ...state, team: null, error: true }

        default:
            return state
    }
}