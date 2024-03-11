import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
     const allComponents = await sql`SELECT * FROM UI_Components;`;
     console.log("Components from database@@@@@@", allComponents);
     return NextResponse.json({ data:allComponents.rows }, { status: 200 });
   } catch (error) {
     return NextResponse.json({ error }, { status: 500 });
   }
 
 }