import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const res = await request.json();
        const {id} = res;
        await sql`delete from Review_Components where id=${id};`;
        return NextResponse.json({status: 200});
    }
    catch(error){
        console.log("response error", error);
        return NextResponse.json({error}, {status:500});
    }
}