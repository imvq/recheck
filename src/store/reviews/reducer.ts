import * as types from './types';

const initialState: types.IState = {
  currentReviewTargetShareableId: null,
  questions: [],
  answers: [],
  marks: [null, null],
  receivedReviewsAmount: 0,
  leftReviewsAmount: 0,
  currentObservedReceivedReview: null,
  currentObservedLeftReview: null
};

export const reviewsReducer = (state = initialState, action: types.IAction): types.IState => {
  switch (action.type) {
    case types.SET_CURRENT_REVIEW_TARGET_SHAREABLE_ID:
      return {
        ...state,
        currentReviewTargetShareableId: action.payload
      };
    case types.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case types.PUSH_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload]
      };
    case types.POP_ANSWER_AND_MARK:
      return {
        ...state,
        answers: state.answers.slice(0, -1),
        marks: state.marks.slice(0, -1)
      };
    case types.PUSH_MARK:
      return {
        ...state,
        marks: [...state.marks, action.payload]
      };
    case types.CLEAR_ANSWERS_AND_MARKS:
      return {
        ...state,
        answers: [],
        marks: []
      };
    case types.SET_RECEIVED_REVIEWS_AMOUNT:
      return {
        ...state,
        receivedReviewsAmount: action.payload
      };
    case types.SET_LEFT_REVIEWS_AMOUNT:
      return {
        ...state,
        leftReviewsAmount: action.payload
      };
    case types.SET_CURRENT_OBSERVED_RECEIVED_REVIEW:
      return {
        ...state,
        currentObservedReceivedReview: action.payload
      };
    case types.SET_CURRENT_OBSERVED_LEFT_REVIEW:
      return {
        ...state,
        currentObservedLeftReview: action.payload
      };
    default:
      return state;
  }
};
