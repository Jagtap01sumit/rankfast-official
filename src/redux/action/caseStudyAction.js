import { actionTypes } from "./actionTypes";

export const getCaseStudies = () => async (dispatch) => {
    try {
        const response = await fetch('/api/get-case-studies');
        const { data } = await response.json();
        if (data) {
            dispatch({ type: actionTypes.GET_CASE_STUDIES_SUCCESS, payload: data })
        }
    } catch (error) {
        dispatch({ type: actionTypes.GET_CASE_STUDIES_FAILURE })
    }
}

export const getCaseStudy = (slug) => async (dispatch) => {
    try {
        const response = await fetch('/api/get-case-study', { method: 'POST', body: JSON.stringify({ slug }) })
        const { data, success } = await response.json()
        if (success && data) {
            dispatch({ type: actionTypes.GET_CASE_STUDY_SUCCESS, payload: data[0] })
        } else if (!success && !data) {
            dispatch({ type: actionTypes.GET_CASE_STUDY_FAILURE })
        }
    } catch (error) {
        dispatch({ type: actionTypes.GET_CASE_STUDY_FAILURE })
    }
}