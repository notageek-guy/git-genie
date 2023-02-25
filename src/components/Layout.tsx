import React from "react";

import Header from "./Header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
