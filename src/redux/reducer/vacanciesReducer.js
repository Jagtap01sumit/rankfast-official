import { actionTypes } from "../action/actionTypes";

const initialState = {
    vacancies: null,
    vacancy: null,
    error: false,
}

export const vacanciesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_VACANCIES_SUCCESS:
            return { ...state, vacancies: payload, error: false }

        case actionTypes.GET_VACANCIES_FAILURE:
            return { ...state, vacancies: null, error: true }

        case actionTypes.CLEAR_VACANCY_STATE:
            return { ...state, vacancy: null, error: false }

        case actionTypes.GET_VACANCY_SUCCESS:
            return { ...state, vacancy: payload, error: false }

        case actionTypes.GET_VACANCY_FAILURE:
            return { ...state, vacancy: null, error: true }

        default:
            return state
    }
}