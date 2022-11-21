import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import questionsReducer from "./questions";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
      questions: questionsReducer
    }
  });

  export default store