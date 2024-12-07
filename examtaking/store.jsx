import { configureStore } from '@reduxjs/toolkit';
import examslice from './slice/examslice'; // Import your slice reducer

// Configure the store using configureStore
const store = configureStore({
  reducer: {
    counter: examslice, // Use your slice as the reducer (you can name it whatever you like)
  },
  // Optional: add any custom middlewares or enhancers if needed
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development only
});

export default store;