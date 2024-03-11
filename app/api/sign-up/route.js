import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const res = await request.json();
    const { name, email, password } = res;
    const user = await sql`insert into Users(name, email, password) values(${name}, ${email}, ${password});`;
    return NextResponse.json({
      status: 200,
      message: "Data added successfully",
    });
  } catch (error) {
    console.log("response error", error);
    throw(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
