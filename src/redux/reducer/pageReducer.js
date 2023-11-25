import { actionTypes } from "../action/actionTypes";

const initialState = {
    page: null,
    loading: false,
    error: false,
};

export const pageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_PAGE_REQUEST:
            return { ...state, loading: true };

        case actionTypes.GET_PAGE_SUCCESS:
            return { ...state, page: payload, loading: false, error: false };

        case actionTypes.GET_PAGE_FAILURE:
            return { ...state, page: null, loading: false, error: true };

        case actionTypes.CLEAR_PAGE_STATE:
            return { ...state, page: null, error: false };

        default:
            return state;
    }
};
