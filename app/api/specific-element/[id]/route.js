import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request){
    try{
        console.log("debug request", request);
        const data = await request.json();
        
        console.log("debug Id in api", data.id);
        const component = await sql`select * from UI_Components where id= ${id};`;
        console.log("debug Specific component: ", component.rows);
        return NextResponse.json({status: 200}, {data: component});
    }
    catch(error){
        console.log("response error", error);
        return NextResponse.json({error}, {status:500});
    }
}