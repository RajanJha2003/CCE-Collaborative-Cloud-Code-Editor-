"use client";

import React, { useRef } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Editor, OnMount } from "@monaco-editor/react";
import monaco from "monaco-editor";
import EditorSidebar from "./sidebar";

const CodeEditor = () => {
  const editorRef = useRef<null | monaco.editor.IStandaloneCodeEditor>(null);

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  return (
    <>
     <EditorSidebar />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          maxSize={75}
          minSize={30}
          defaultSize={60}
          className="flex flex-col p-2"
        >
          <div className="h-10 w-full flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="min-w-20 justify-between"
            >
              index.html <X className="h-3 w-3" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="min-w-20 justify-between"
            >
              styles.css <X className="h-3 w-3" />
            </Button>
          </div>
          <div className="grow w-full overflow-hidden rounded-lg">
            <Editor
              height="100%"
              defaultLanguage="typescript"
              theme="vs-dark"
              onMount={handleEditorMount}
              options={{
                minimap:{
                  enabled:false
                },
                padding:{
                  bottom:4,
                  top:4
                },
                scrollBeyondLastLine:false,
              }}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              defaultSize={50}
              minSize={20}
              className="p-2 flex flex-col"
            >
              <div className="h-10 w-full flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="min-w-20 justify-between"
                >
                  localhost:3000 <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="w-full grow rounded-lg bg-foreground">


              </div>
            </ResizablePanel>
            <ResizableHandle />

            <ResizablePanel
              defaultSize={50}
              minSize={20}
              className="p-2 flex flex-col"
            >
              <div className="h-10 w-full flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="min-w-20 justify-between"
                >
                  Node <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="w-full grow rounded-lg bg-foreground">


              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default CodeEditor;
