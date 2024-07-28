import { Virtualbox } from '@/lib/types'
import React from 'react'
import ProjectCard from './projectCard'
import Image from 'next/image'
import ProjectCardDropdown from './projectCard/dropdown'
import { Clock, Globe } from 'lucide-react'

const DashboardProjects = ({virtualboxes}:{virtualboxes:Virtualbox[]}) => {
  return (
    <div className="grow p-4 flex flex-col">
      <div className="text-xl font-medium mb-8">My Projects</div>
      <div className="grow w-full grid lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-4 ">
     
          {virtualboxes.map((virtualbox) => (
            <ProjectCard key={virtualbox.id} id={virtualbox.id}>
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
       
      </div>
   
  )
}

export default DashboardProjects