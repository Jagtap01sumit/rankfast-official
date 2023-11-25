import { actionTypes } from "../action/actionTypes";

const initialState = {
    testimonial: null,
    error: false
}

export const empTestimonialReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_EMPLOYEE_TESTIMONIAL_SUCCESS:
            return { ...state, testimonial: payload, error: false }

        case actionTypes.GET_EMPLOYEE_TESTIMONIAL_FAILURE:
            return { ...state, testimonial: null, error: true }

        default:
            return state
    }
}