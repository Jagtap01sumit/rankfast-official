import { actionTypes } from "./actionTypes";

export const getPortfolio = () => async (dispatch) => {
    try {
        const response = await fetch('/api/get-portfolio');
        const { data } = await response.json()
        dispatch({ type: actionTypes.GET_PORTFOLIO_PROJECTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PORTFOLIO_PROJECT_FAILURE })
    }
}