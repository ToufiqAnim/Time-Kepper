import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://time-kepper-api.vercel.app',
  }),
  tagTypes: ['Watches'],
  endpoints: (builder) => ({}),
});

export default apiSlice;
