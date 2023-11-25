import { actionTypes } from "./actionTypes"

export const fetchAllVacancies = () => async (dispatch) => {
    try {
        const response = await fetch('/api/get-vacancies')
        const { data } = await response.json()
        dispatch({ type: actionTypes.GET_VACANCIES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_VACANCIES_FAILURE })
    }
}

export const fetchVacancy = (slug) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.CLEAR_VACANCY_STATE })
        const response = await fetch('/api/get-vacancy', { method: 'POST', body: JSON.stringify({ slug }) })
        const { data } = await response.json()
        dispatch({ type: actionTypes.GET_VACANCY_SUCCESS, payload: data[0] })
    } catch (error) {
        dispatch({ type: actionTypes.GET_VACANCY_FAILURE })
    }
}