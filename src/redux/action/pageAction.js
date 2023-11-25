import { actionTypes } from "./actionTypes";

export const fetchPage = (slug) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_PAGE_REQUEST });

    try {
        const response = await fetch('/api/get-page', { method: 'POST', body: JSON.stringify({ slug }) });
        const { page } = await response.json();
        dispatch({ type: actionTypes.GET_PAGE_SUCCESS, payload: page });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PAGE_FAILURE });
    }
};

export const clearPageState = () => async (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_PAGE_STATE });
};
