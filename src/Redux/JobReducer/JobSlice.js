import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  jobData: [],
  categoryFilter:[],
  locationFilter: "",
};

export const jobReducer = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateCategory: (state,action) => {
      if (action?.payload) {
        const { payload } = action;
        state.categoryFilter = state.categoryFilter.includes(payload)
          ? state.categoryFilter.filter((cat) => cat !== payload)
          : [...state.categoryFilter, payload];
      }
    },
    updateLocation: (state,action) => {
      if (action?.payload) {
        const { payload } = action;
        state.locationFilter = state.locationFilter === payload
          ? ""
          : payload;
      }
    },
  },
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

export const {updateCategory,updateLocation} = jobReducer.actions;
export const getJobsData = createAsyncThunk("jobs/getJobsData", async () => {
  const response = await axios({
    method: "get",
    url: "https://jsonfakery.com/jobs/simple-paginate",
  });
  return response?.data?.data;
});
export default jobReducer.reducer;
