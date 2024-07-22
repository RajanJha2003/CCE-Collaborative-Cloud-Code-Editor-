"use client";

import React, { useState } from "react";
import CustomButton from "../ui/customButton";
import { Code2, FolderDot, HelpCircle, Plus, Settings, Users } from "lucide-react";
import { Button } from "../ui/button";

type TScreen = "projects" | "shared" | "settings" | "search";


const Dashboard = () => {

    const [screen,setScreen]=useState<TScreen>("projects");

    const activeScreen = (s: TScreen) => {
        if (screen === s) return "justify-start";
        else return "justify-start font-normal text-muted-foreground";
      };
  return (
    <div className="flex grow w-full">
      <div className="w-56 border-r border-border p-4 justify-between flex flex-col">
        <div>
          <CustomButton className="mb-4">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </CustomButton>
          <Button
              variant={"ghost"}
              onClick={() => setScreen("projects")}
              className={activeScreen("projects")}
            >
              <FolderDot className="w-4 h-4 mr-2" />
              My Projects
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => setScreen("shared")}
              className={activeScreen("shared")}
            >
              <Users className="w-4 h-4 mr-2" />
              Shared With Me
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => setScreen("settings")}
              className={activeScreen("settings")}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
        </div>

        <div className="flex flex-col">
        <Button
              variant={"ghost"}
              className="justify-start font-normal text-muted-foreground"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Github Repo
            </Button>
            <Button
              
              variant={"ghost"}
              className="justify-start font-normal text-muted-foreground"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              About
            </Button>
        </div>
      </div>
      <div className="grow flex flex-col items-start p-4">
        <h1 className="text-2xl font-medium text-center">
        A Collaborative Cloud Code Editor, AI Powered, Auto-Scaling Copilot

        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
