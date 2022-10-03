import { createSlice } from '@reduxjs/toolkit'

const initialHeaderState = {
  headerPatch: null,
  headerMissionName: null,
}

const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeaderState,
  reducers: {
    headerPatch(state, action) {
      state.headerPatch = action.payload
    },
    headerMissionName(state, action) {
      state.headerMissionName = action.payload
    },
  },
})

export const headerActions = headerSlice.actions
export default headerSlice.reducer
