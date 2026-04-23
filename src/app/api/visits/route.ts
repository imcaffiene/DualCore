import { NextResponse } from "next/server";
import { incrementVisits, getVisitCount, resetVisits } from "@/lib/counter";

// POST — called on each page visit (increments + returns count)
export async function POST() {
  try {
    const count = await incrementVisits();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}

// GET — just read the current count without incrementing
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Secret reset: GET /api/visits?reset=true
    if (searchParams.get("reset") === "true") {
      const count = await resetVisits();
      return NextResponse.json({ count, reset: true });
    }

    const count = await getVisitCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
