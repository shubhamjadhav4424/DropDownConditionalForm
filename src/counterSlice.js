import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userdata:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    transfer_com2:(state,actions)=>{
      state.userdata.push(actions.payload);   
    },
  },
})

export const { transfer_com2 } = counterSlice.actions

export default counterSlice.reducer