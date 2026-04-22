import { NextResponse } from "next/server";
import { incrementVisits, getVisitCount } from "@/lib/counter";

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
export async function GET() {
  try {
    const count = await getVisitCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
