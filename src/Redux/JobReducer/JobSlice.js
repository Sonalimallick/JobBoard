import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  jobData: [],
};

export const jobReducer = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getJobsData.fulfilled, (state, action) => {
      state.jobData = action.payload;
      state.loading = false;
    });
  },
});

// export const {} = jobReducer.actions;
export const getJobsData = createAsyncThunk("jobs/getJobsData", async () => {
  const response = await axios({
    method: "get",
    url: "https://jsonfakery.com/jobs/simple-paginate",
  });
  return response?.data?.data;
});
export default jobReducer.reducer;
