import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const data = await request.json();
        const {id} = data;
        const component = await sql`select * from UI_Components where id= ${id};`;
        await sql`update UI_Components set views = views+1 where id=${id};`;
        return NextResponse.json( {data: component.rows},{status: 200});
    }
    catch(error){
        console.log("response error", error);
        return NextResponse.json({error}, {status:500});
    }
}