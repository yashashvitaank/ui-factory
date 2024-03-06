import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const components = await sql`SELECT * FROM Components;`;
    // console.log("hello",components);
    return NextResponse.json({ data: components.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
