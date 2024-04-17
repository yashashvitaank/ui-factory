import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const fetchCache = "force-no-store";

export async function GET(request) {
  try {
    const queries = await sql`SELECT * FROM Queries;`;
    return NextResponse.json({ data: queries.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
