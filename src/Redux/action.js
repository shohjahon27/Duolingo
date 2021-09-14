import { dispatch } from "./store";
import { SET_ANSWER, CHECK, DELETE_ANSWER } from "./types";

export const setAnswer = (index) => {
  dispatch({ type: SET_ANSWER, payload: index });
};

export const deleteAnswer = (index) => {
  dispatch({ type: DELETE_ANSWER, payload: index });
};

export const check = () => {
  dispatch({ type: CHECK });
};
