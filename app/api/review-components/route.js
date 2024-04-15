// import { headers } from 'next/headers';
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const fetchCache = "force-no-store";

export async function GET(request) {
  try {
    // const headersList = headers();
    // console.log("debug headers list!!!!!",headersList);
    const allComponents = await sql`SELECT * FROM Review_Components;`;
    // console.log("Components from database@@@@@@", allComponents);
    return NextResponse.json({ data: allComponents.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
