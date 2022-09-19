import {configureStore} from '@reduxjs/toolkit'
import {edgeSlice} from './edgeSlice'
import {nodeSlice} from './nodeSlice'

const store = configureStore({
  reducer:{
    nodes: nodeSlice.reducer,
    edges: edgeSlice.reducer
  }
})

export default store;