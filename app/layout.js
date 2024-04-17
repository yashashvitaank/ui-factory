"use client";
import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/NavBar";
import Navigation from "@/components/Navigation";
import { ToastContainer } from "react-toastify";
import { setCookie } from "@/utils/cookies";

export const RootLayoutContext = createContext({});

export default function RootLayout({ children }) {
  const [isSignedIn, setIsSignedIn ] = useState(false);
  const [isAdmin, setIsAdmin ] = useState(false);
  const setSession = ()=>{
    setIsSignedIn(true);
    sessionStorage.setItem("signedIn", "true");
  }
  const clearSession = () => {
    setIsSignedIn(false);
    setCookie("signedIn", "");
    sessionStorage.removeItem("signedIn");
    setIsAdmin(false);
  }
  useEffect(()=>{
    const signedIn = sessionStorage.getItem("signedIn");
    setIsSignedIn(signedIn);
  },[])
  const context = {isSignedIn, setSession, clearSession, setIsAdmin, isAdmin};

  return (
    <RootLayoutContext.Provider value={context}>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </head>
        <title>UI Factory</title>
        <body
          style={{
            boxSizing: "border-box",
            margin: "0",
            padding: "0",
            paddingTop: "66px",
            minHeight: "100vh",
            background: "#000",
            color: "#fff",
            fontFamily: "monospace",
          }}
        >
          <NavBar/>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ fontSize: "14px" }}
          />
          {children}
        </body>
      </html>
    </RootLayoutContext.Provider>
  );
}
