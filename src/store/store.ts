import exampleReducer from '@/reducers/example.reducer';
import { configureStore } from '@reduxjs/toolkit';


export default configureStore({
  reducer: {
    counter: exampleReducer,
  },
});
