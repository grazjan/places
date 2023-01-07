import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'places',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    tagTypes: ['Places'],
    endpoints: builder => ({
        getPlaces: builder.query({
            query: () => '/places',
            transformResponse: res => res.sort((a, b) => b.id - a.id), // Sort in reverse order
            providesTags: ['Places']
        }),
        getPlace: builder.query({
            query: (id) => `/places/${id}`,
            providesTags: ['Places']
        }),
        addPlace: builder.mutation({
            query: (place) => ({
                url: '/places',
                method: 'POST',
                body: place
            }),
            invalidatesTags: ['Places'],
        }),
        updatePlace: builder.mutation({
            query: (place) => ({
                url: `/places/${place.id}`,
                method: 'PATCH',
                place
            }),
            invalidatesTags: ['Places'],
        }),
        deletePlace: builder.mutation({
            query: ({ id }) => ({
                url: `/places/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Places'],
        }),
        uploadFile: builder.mutation({
            query: (file) => ({
                url: '/upload',
                method: 'POST',
                body: file
            })
        })
    })
});

export const { 
    useGetPlacesQuery, 
    useLazyGetPlacesQuery,
    useLazyGetPlaceQuery,
    useAddPlaceMutation,
    useUpdatePlaceMutation,
    useDeletePlaceMutation,
    useUploadFileMutation
} = apiSlice;