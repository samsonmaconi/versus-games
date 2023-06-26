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
      console.log('action.payload', action.payload)
      state.allQuestions = [...action.payload]
    },
    updateActiveQuestionIndex: (state, action) => {
      state.activeQuestionIndex = action.payload
    },
    reset: (state, action) => {
      state = {
        activeQuestionIndex: 0,
        allQuestions: []
      }
    },
  },
})

export const { loadQuestionsData, updateActiveQuestionIndex, reset } = gameQuestionsSlice.actions

export default gameQuestionsSlice.reducer