import { baseApi } from "./apiBaseUrlSlice";

export const allApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Lead Auth
    leadLogin: builder.mutation<any, { email: string; password: string }>({
      query: (body) => ({
        url: `/lead-login`,
        method: "POST",
        body,
      }),
    }),

    //Lead Profile
    getLeadManage: builder.query<any, void>({
      query: () => `/manage-lead`,
    }),

    //Lead Logout
    leadLogout: builder.mutation<any, void>({
      query: () => ({
        url: `/lead-logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLeadLoginMutation,
  useGetLeadManageQuery,
  useLeadLogoutMutation,
} = allApiSlice;
