import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface QuestionResults {
  loss: number;
  wins: number;
}

const initialState: QuestionResults = {
  loss: 0,
  wins: 0,
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    growWins: (state, action: PayloadAction<number>) => {
      state.wins += action.payload;
    },
    growLoss: (state, action: PayloadAction<number>) => {
      state.loss += action.payload;
    }
  }
})

export const { growWins, growLoss } = questionsSlice.actions
export default questionsSlice.reducer