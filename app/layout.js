"use client";

import NavBar from "@/components/NavBar";
import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      <title>UI factory</title>
      <body style={{ boxSizing: "border-box", margin: "0", padding: "0", paddingTop: '66px', minHeight:"100vh", background:"#111111", color:"#fff", fontFamily:"monospace"}}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
