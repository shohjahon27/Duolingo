import { initialState } from "./initialState";
import { CHECK, DELETE_ANSWER, SET_ANSWER } from "./types";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // togri javobni tanlash uchun case
    case SET_ANSWER:
      let words = [...state.words];
      let answer = [...state.answer];
      answer = [...answer, words[state.level][payload]];
      words[state.level].splice(payload, 1);
      return { ...state, words: words, answer: answer };

    // notogri javobni ortqa qaytarish uchun case
    case DELETE_ANSWER:
      let deleteWord = [...state.words];
      let deleteAnswer = [...state.answer];
      deleteWord[state.level].push({ text: deleteAnswer[payload].text });
      deleteAnswer.splice(payload, 1);
      return { ...state, words: deleteWord, answer: deleteAnswer };

    // javobni tekshiradi agar togri bolsa keyingi bosqichga otkazadi
    case CHECK:
      let checkAnswer = [...state.answer];
      let correctAnswer = checkAnswer.map((v) => v.text).join(" ");
      if (correctAnswer === state.trueAnswers[state.level]) {
        console.log("ishladi");
        return {
          ...state,
          level: state.level + 1,
          answer: [],
          progress: state.progress + 10,
        };
      } else {
        console.log("ishlamadi");
      }

    default:
      return state;
  }
};
