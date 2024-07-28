"use client";

import React, { useState } from "react";
import CustomButton from "../ui/customButton";
import {
  Clock,
  Code2,
  FolderDot,
  Globe,
  HelpCircle,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import ProjectCard from "./projectCard";
import { Virtualbox } from "@/lib/types";
import Image from "next/image";
import ProjectCardDropdown from "./projectCard/dropdown";
import DashboardSharedWithMe from "./shared";

type TScreen = "projects" | "shared" | "settings" | "search";

const Dashboard = ({ virtualboxes }: { virtualboxes: Virtualbox[] }) => {
  const [screen, setScreen] = useState<TScreen>("projects");

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
      {screen === "projects" ? (
        <div className="grow grid lg:grid-cols-4 xl:grid-cols-5 space-y-0.5 p-4">
          {virtualboxes.map((virtualbox) => (
            <ProjectCard key={virtualbox.id}>
              <div className="flex space-x-2 items-center justify-start w-full" >
                <Image src={virtualbox.type=="react"?"/project-icons/react.svg":"/project-icons/node.svg"} width={20} height={20} alt="" />
                <div className="font-medium flex items-center whitespace-nowrap w-full text-ellipsis overflow-hidden">
                {virtualbox.name}
              </div>
              <ProjectCardDropdown virtualbox={virtualbox} />
              </div>
              
              <div className="flex flex-col text-muted-foreground space-y-0.5 text-sm">
                <div className="flex items-center">
                  <Globe className="w-3 h-3 mr-2" /> Public
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-2" /> 3d ago
                </div>
              </div>
            </ProjectCard>
          ))}
        </div>
      ) : screen=="shared"?<DashboardSharedWithMe virtualboxes={virtualboxes} />:screen=="settings"?null:null}
    </div>
  );
};

export default Dashboard;
