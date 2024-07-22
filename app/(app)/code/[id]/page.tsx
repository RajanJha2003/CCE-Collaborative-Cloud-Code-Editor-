"use client";

import CodeEditor from "@/components/editor";
import Navbar from "@/components/navbar";
import { useClerk } from "@clerk/nextjs";

export default function Home() {

  const clerk=useClerk();
  return (
    <div className="flex w-screen overflow-hidden overscroll-none flex-col h-screen bg-background">
      
        <Navbar />
      
      <div className="w-screen flex grow">
        {clerk.loaded ? <CodeEditor />:null}

        
      </div>
    </div>
  );
}
