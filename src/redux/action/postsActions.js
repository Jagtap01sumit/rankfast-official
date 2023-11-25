import { actionTypes } from "./actionTypes";

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await fetch('/api/get-posts');
        const { postsData } = await response.json()
        dispatch({ type: actionTypes.GET_POSTS_SUCCESS, payload: postsData })
    } catch (error) {
        dispatch({ type: actionTypes.GET_POSTS_FAILURE })
    }
}

export const fetchPost = (slug) => async (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_POST_STATE });
    try {
        const response = await fetch('/api/get-post', { method: "POST", body: JSON.stringify({ slug }) })
        const { post } = await response.json();
        dispatch({ type: actionTypes.GET_POST_SUCCESS, payload: post[0] })
    } catch (error) {
        dispatch({ type: actionTypes.GET_POST_FAILURE })
    }
}

export const fetchCategorioes = () => async (dispatch) => {
    try {
        const response = await fetch('/api/get-categories')
        const { categories } = await response.json()
        dispatch({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories })
    } catch (error) {
        dispatch({ type: actionTypes.GET_CATEGORIES_FAILURE })
    }
}
