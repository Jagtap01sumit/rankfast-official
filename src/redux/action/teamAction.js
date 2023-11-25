import { actionTypes } from "./actionTypes"

export const getTeam = () => async (dispatch) => {
    try {
        const response = await fetch('/api/get-team')
        const { team } = await response.json()
        dispatch({ type: actionTypes.GET_TEAM_SUCCESS, payload: team })
    } catch (error) {
        dispatch({ type: actionTypes.GET_TEAM_FAILURE })
    }
}