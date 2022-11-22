import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { fetchApi } from "../config/axiosInstance";

export const getAllQuestions = createAsyncThunk("ALL_QUESTIONS", async () => {
    const res = await fetchApi({
      method: "get",
      url: "/api/questions/",
    });  
    console.log(res.data.data.rows)
});


const questionsReducer = createReducer({}, {
  [getAllQuestions.fulfilled]: (state, action) => action.payload,
  [getAllQuestions.rejected]: (state, action) => action.payload,
});

export default questionsReducer



