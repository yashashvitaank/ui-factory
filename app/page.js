'use client'
import { redirect } from "next/navigation"

export default function Home() {
  redirect("ui-factory/dashboard", "replace");
  return (
    <main style={{boxSizing: "border-box", margin: '0', padding: "0"}}>
      {/* <Dashboard /> */}

    </main>
  )
}
