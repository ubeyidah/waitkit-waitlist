"use server"

import { revalidatePath } from "next/cache"
import { wk } from "@/lib/waitkit"

export async function joinWaitlist(email: string) {
  try {
    await wk.subscribers.create({ email })
    revalidatePath("/")
    return { success: true as const, error: null }
  } catch (err) {
    return {
      success: false as const,
      error: err instanceof Error ? err.message : "Something went wrong",
    }
  }
}
