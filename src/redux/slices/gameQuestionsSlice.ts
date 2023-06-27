import { createSlice } from '@reduxjs/toolkit'

export const gameQuestionsSlice = createSlice({
  name: 'gameQuestions',
  initialState: {
    activeQuestionIndex: 0,
    allQuestions: new Array(),
    answerIndices: new Array(),
  },
  reducers: {
    loadQuestionsData: (state, action) => {
      state.activeQuestionIndex = 0;
      state.allQuestions = [...action.payload]
      state.answerIndices = new Array(action.payload.length);
    },
    updateActiveQuestionIndex: (state, action) => {
      state.activeQuestionIndex = action.payload
    },
    updateAnsweredQuestion: (state, action) => {
      const { questionIndex, answerIndex } = action.payload
      state.answerIndices[questionIndex] = answerIndex;
    },
    reset: (state, action) => {
      state = {
        activeQuestionIndex: 0,
        allQuestions: [],
        answerIndices: [],
      }
    },
  },
})

export const { loadQuestionsData, updateActiveQuestionIndex, updateAnsweredQuestion, reset } = gameQuestionsSlice.actions

export default gameQuestionsSlice.reducer