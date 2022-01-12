// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ApplicationsApi = createApi({
  reducerPath: 'ApplicationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:56861/' }),
  endpoints: (builder) => ({
    getAllApplications: builder.query({
      query: () => 'applications',
      method: 'GET'
    }),
    postApplication: builder.mutation({
      query: (body) => ({
        url: 'applications',
        method: 'POST',
        body
      })
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostApplicationMutation, useGetAllApplicationsQuery } = ApplicationsApi