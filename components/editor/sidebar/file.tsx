"use client";

import React from 'react'
import { TFile } from './types';
import { getIconForFile } from 'vscode-icons-js';
import Image from 'next/image';
import { File } from 'lucide-react';

const SidebarFile = ({data}:{data:TFile}) => {
  return (
    <div className="w-full flex items-center h-6 transition-colors hover:text-muted-foreground cursor-pointer">
      
    {
      getIconForFile("index.html") ? (
        <Image src={`/icons/${getIconForFile("index.html")}`} alt="File Icon" width={16} height={16} className="mr-2"  />
      ):    <File className="h-4 w-4 mr-2" />
    }
    {data.name}
  </div>
  )
}

export default SidebarFile