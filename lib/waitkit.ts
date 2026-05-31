import { WaitKit } from "waitkit"

export const wk = new WaitKit({
  apiKey: process.env.WAITKIT_API_KEY || "",
  projectSlug: process.env.WAITKIT_PROJECT_SLUG || "",
  baseUrl: "https://waitkit-863c1ab981a9.herokuapp.com",
})
