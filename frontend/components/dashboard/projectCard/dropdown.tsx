"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Virtualbox } from '@/lib/types'
import { Ellipsis, Lock, Trash2 } from 'lucide-react';
import React from 'react'

const ProjectCardDropdown = ({virtualbox}:{virtualbox:Virtualbox}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="
      h-6 w-6 flex items-center justify-center transition-colors bg-transparent hover:bg-muted-foreground/25 rounded-sm">
            <Ellipsis className='w-4 h-4' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40'>
            <DropdownMenuItem>
                <Lock className='mr-2 h-4 w-4' />
                <span>Make Private</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Trash2 className='mr-2 h-4 w-4' />
                <span>Delete project</span>
            </DropdownMenuItem>

        </DropdownMenuContent>


    </DropdownMenu>
  )
}

export default ProjectCardDropdown