import { createSlice } from '@reduxjs/toolkit'

export const gameQuestionsSlice = createSlice({
  name: 'gameQuestions',
  initialState: {
    activeQuestionIndex: 0,
    allQuestions: new Array()
  },
  reducers: {
    loadQuestionsData: (state, action) => {
      state.activeQuestionIndex = 0;
      state.allQuestions = [...action.payload]
    },
    updateActiveQuestionIndex: (state, action) => {
      state.activeQuestionIndex = action.payload
    },
    updateAnsweredQuestion: (state, action) => {
      const { questionIndex, answerIndex } = action.payload
      state.allQuestions[questionIndex].answeredIndex = answerIndex;
    },
    reset: (state, action) => {
      state = {
        activeQuestionIndex: 0,
        allQuestions: []
      }
    },
  },
})

export const { loadQuestionsData, updateActiveQuestionIndex, updateAnsweredQuestion, reset } = gameQuestionsSlice.actions

export default gameQuestionsSlice.reducer