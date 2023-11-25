import { combineReducers } from "redux";
import { teamReducer } from "./teamReducer";
import { pageReducer } from "./pageReducer";
import { vacanciesReducer } from "./vacanciesReducer";
import { empTestimonialReducer } from "./empTestimonialReducer";
import { postsReducer } from './postsReducer'
import { portfolioReducer } from "./portfolioReducer";
import { caseStudyReducer } from "./caseStudyReducer";

const rootReducer = combineReducers({
    teamReducer, pageReducer, vacanciesReducer, empTestimonialReducer, postsReducer, portfolioReducer, caseStudyReducer
})

export default rootReducer