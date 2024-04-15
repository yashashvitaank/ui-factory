import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const data = await request.json();
        const {email, password} = data;
        const res = await sql `select * from Users where email= ${email} and password = ${password};`;
        // console.log("debug SIGN IN RESPONSE", res.rows);
        if(res.rows.length > 0)
        {
            if(res.rows[0].email == 'admin@uifactory.com')
            {
                return NextResponse.json({status: 200, isAdmin: true}, {data: res.rows});
            }
            return NextResponse.json({status: 200, isAdmin: false}, {data: res.rows});
        }
        else
        {
            return NextResponse.json({status:400}, {data:"User Not Found. Please Sign Up first"});
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 }, {message: "Something Went Wrong"});
    }
}