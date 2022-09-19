import {createSlice} from '@reduxjs/toolkit'

export const edgeSlice = createSlice({
  name:'edgeSlice',
  initialState: [],
  reducers:{
    addNode: (state, action)=>{
      state.value = state.value + action.payload;
    }
  }
})

export const {addNode} = edgeSlice.actions;