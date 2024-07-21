import CodeEditor from "@/components/editor";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex w-screen overflow-hidden overscroll-none flex-col h-screen bg-background">
      
        <Navbar />
      
      <div className="w-screen flex grow">
        <CodeEditor />

        
      </div>
    </div>
  );
}
