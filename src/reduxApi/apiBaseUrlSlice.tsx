import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nextlevelmca.com/mca/v1",
    // baseUrl: "https://rare-terrier-calm.ngrok-free.app/mca/v1",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as any;
      const token = state.user.currentUser;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("SSO-Token", token);
      }

      headers.set("Content-Type", "application/json");
      headers.set("ngrok-skip-browser-warning", "true");

      return headers;
    },
  }),
  endpoints: () => ({}),
});
