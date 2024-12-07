import { createSlice } from '@reduxjs/toolkit'

const initialState = { examid:'',questionarr:[{'question':'','options':['a','b','c','f']}] }

const examslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setexamids(state,action){
        state.examid=action.payload.examid

    },
    setquestionarr(state,action){
        state.questionarr=action.payload.questionarr
    }
  },
})

export const { setexamids, setquestionarr } = examslice.actions
export default examslice.reducer