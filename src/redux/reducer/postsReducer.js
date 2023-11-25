import { actionTypes } from "../action/actionTypes";

const initialState = {
    posts: null,
    post: null,
    categories: null,
    error: false
}

export const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_POSTS_SUCCESS:
            return { ...state, posts: payload, error: false }

        case actionTypes.GET_POSTS_FAILURE:
            return { ...state, posts: null, error: true }

        case actionTypes.GET_POST_SUCCESS:
            return { ...state, post: payload, error: false }

        case actionTypes.GET_POST_FAILURE:
            return { ...state, post: null, error: true }

        case actionTypes.CLEAR_POST_STATE:
            return { ...state, post: null, error: false }

        case actionTypes.GET_CATEGORIES_SUCCESS:
            return { ...state, categories: payload, error: false }

        case actionTypes.GET_CATEGORIES_FAILURE:
            return { ...state, categories: null, error: true }

        default:
            return state
    }
}