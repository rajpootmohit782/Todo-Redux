import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./reducer";

//configureStore is function, to put reducer as a object,,, we get store as return

export default configureStore({
  reducer: myreducer
});
