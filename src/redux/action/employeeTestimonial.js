import { actionTypes } from "./actionTypes";

export const FetchEmployeeTestimonial = () => async (dispatch) => {
    try {
        const response = await fetch('/api/get-emp-testimonial')
        const { data } = await response.json()
        dispatch({ type: actionTypes.GET_EMPLOYEE_TESTIMONIAL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_EMPLOYEE_TESTIMONIAL_FAILURE })
    }
}