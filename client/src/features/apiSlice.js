import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'places',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: builder => ({
        getPlaces: builder.query({
            query: () => '/places'
        })
    })
});

export const { useGetPlacesQuery } = apiSlice;