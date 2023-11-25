import { actionTypes } from "../action/actionTypes";

const initialState = {
    caseStudies: null,
    caseStudy: null,
    error: false
}

export const caseStudyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_CASE_STUDIES_SUCCESS:
            return { ...state, caseStudies: payload, error: false }

        case actionTypes.GET_CASE_STUDIES_FAILURE:
            return { ...state, caseStudies: null, error: true }

        case actionTypes.GET_CASE_STUDY_SUCCESS:
            return { ...state, caseStudy: payload, error: false }

        case actionTypes.GET_CASE_STUDY_FAILURE:
            return { ...state, caseStudy: null, error: true }

        default:
            return state
    }
}