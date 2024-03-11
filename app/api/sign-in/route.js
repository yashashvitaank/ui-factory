import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const data = await request.json();
        const {email, password} = data;
        const res = await sql `select * from Users where email= ${email} and password = ${password};`;
        console.log("debug SIGN IN RESPONSE", res.rows);
        if(res.rows.length > 0)
        {
            return NextResponse.json({status: 200}, {data: res.rows});
        }
        else
        {
            return NextResponse.json({status:400}, {data:"NO record"});
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 }, {message: "Invalid User"});
    }
}