import { wk } from "@/lib/waitkit"

export async function GET() {
  try {
    const count = await wk.subscribers.count()
    return Response.json({ count })
  } catch {
    return Response.json({ count: null }, { status: 500 })
  }
}
