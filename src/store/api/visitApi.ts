import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Visit } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const visitApi = createApi({
  reducerPath: "visitApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getVisits: builder.query<Visit[], void>({
      query: () => "/initialVisits",
    }),
  }),
});

export const { useGetVisitsQuery, useLazyGetVisitsQuery } = visitApi;
