import apiSlice from "../api/apiSlice";

export const watchesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWatches: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["Products"],
    }),
    getWatchesById: builder.query({
      query: (id) => ({
        url: `/products/find/${id}`,
      }),
      providesTags: ["Products"],
    }),
    addWatches: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    removeWatches: builder.mutation({
      query: (id) => ({
        url: ` /products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});
export const {
  useGetWatchesQuery,
  useAddWatchesMutation,
  useRemoveWatchesMutation,
  useGetWatchesByIdQuery,
} = watchesApi;
