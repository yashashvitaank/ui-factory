import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const res = await request.json();
    const { name, email, remarks } = res;
    const user = await sql`insert into Queries(name, email, remarks) values(${name}, ${email}, ${remarks});`;
    return NextResponse.json({
      status: 200,
      message: "Data added successfully",
    });
  } catch (error) {
    console.log("response error", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
