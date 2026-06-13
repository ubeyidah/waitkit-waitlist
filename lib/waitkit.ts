import { WaitKit } from "waitkit"

export const wk = new WaitKit({
  apiKey: process.env.WAITKIT_API_KEY || "",
  projectSlug: process.env.WAITKIT_PROJECT_SLUG || "",
  baseUrl: "https://waitkit-5494a8d58dca.herokuapp.com",
})
