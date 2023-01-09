import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/* Documentation: https://nominatim.org/release-docs/develop/api/Search/#examples */

export const geocodingSlice = createApi({
    reducerPath: 'geocoding',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://nominatim.openstreetmap.org/' }),
    tagTypes: ['Geocoding'],
    endpoints: builder => ({
        getLocation: builder.query({
            query: (city) => `/search?q=${city}&format=json&addressdetails=1&&accept-language=en`,
            providesTags: ['Geocoding']
        }),
    })
});

export const {  
    useLazyGetLocationQuery,
} = geocodingSlice;