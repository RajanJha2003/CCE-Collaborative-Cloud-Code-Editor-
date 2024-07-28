"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { LogOut, Pencil } from "lucide-react";
import { User } from "@/lib/types";

const UserButton = ({ userData }: { userData: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-9 h-9 rounded-full overflow-hidden font-mono bg-gradient-to-t from-neutral-800 to-neutral-600 flex items-center justify-center text-sm font-medium  ">
        {userData?.name
            ?.split(" ")
            .slice(0, 2)
            .map((name) => name[0].toUpperCase())}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer">
          <Pencil className="mr-2 h-4 w-4" />
          <span>Edit Profile</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="!text-destructive cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
