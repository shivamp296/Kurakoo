import { 
    USER_QUESTION_FAIL,
     USER_QUESTION_REQUEST,
      USER_QUESTION_RESET,
       USER_QUESTION_SUCCESS 
    } from "../actions/constants"

export const questionListReducer = (state = { questions: [] }, action) => {
    switch (action.type) {
      case USER_QUESTION_REQUEST:
        return { loading: true }
      case USER_QUESTION_SUCCESS:
        return { loading: false, users: action.payload }
      case USER_QUESTION_FAIL:
        return { loading: false, error: action.payload }
        case USER_QUESTION_RESET:
          return { questions: [] }
      default:
        return state
    }
}