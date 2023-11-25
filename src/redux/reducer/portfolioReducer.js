import { actionTypes } from "../action/actionTypes";

const initialState = {
    portfolio: null,
    error: false
}

export const portfolioReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_PORTFOLIO_PROJECTS_SUCCESS:
            return { ...state, portfolio: payload, error: false }

        case actionTypes.GET_PORTFOLIO_PROJECT_FAILURE:
            return { ...state, portfolio: null, error: true }

        default:
            return state
    }
}