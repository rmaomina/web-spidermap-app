import {createSlice} from '@reduxjs/toolkit'

export const nodeSlice = createSlice({
  name:'nodesSlice',
  initialState: [{
    id: '0',
    type: 'input',
    data: { label: 'Start!' },
    position: { x: 0, y: 0 },
  }],
  reducers:{
    addNode: (state, action)=>{
      state.value = state.value + action.payload;
    }
  }
})

export const {addNode} = nodeSlice.actions;