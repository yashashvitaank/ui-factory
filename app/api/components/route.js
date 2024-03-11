import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const res = await request.json();
        const {name, markup, author} = res;
        console.log("component response in api??????????", res);
        const components = await sql`insert into UI_Components(name, markup,author) values(${name}, ${markup}, ${author});`;
        console.log("component inserted.. ", components.rows);
        return NextResponse.json({status: 200});
    }
    catch(error){
        console.log("response error", error);
        return NextResponse.json({error}, {status:500});
    }
}