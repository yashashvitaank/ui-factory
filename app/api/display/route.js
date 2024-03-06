import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
     console.log("headers log@@@@@####",request.headers);
     const allComponents = await sql`SELECT * FROM UI_Components;`;
     console.log("display api called////////",allComponents);
     return NextResponse.json({ data:allComponents.rows }, { status: 200 });
   } catch (error) {
     return NextResponse.json({ error }, { status: 500 });
   }
 
 }