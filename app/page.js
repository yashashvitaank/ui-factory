'use client'
import { redirect } from "next/navigation"

export default function Home() {
  redirect("ui-factory/home", "replace");
  return (
    <main style={{boxSizing: "border-box", margin: '0', padding: "0", width: "100%", height:"100dvh"}}>
      {/* <Dashboard /> */}

    </main>
  )
}
