import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from '../features/apiSlice'
import { geocodingSlice } from '../features/geocodingSlice';

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [geocodingSlice.reducerPath]: geocodingSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware).concat(geocodingSlice.middleware)
});