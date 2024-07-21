import React from 'react'
import { Button } from '../ui/button'
import { ChevronLeft, Clock, Pencil } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="h-14 px-2 w-full border-b border-border flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <button  className="ring-offset-2 ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none rounded-sm">
                <Clock className='h-10 w-10' />
            </button>
            <div className='flex items-center text-sm font-medium'>My React Project

                <div className='h-7 w-7 flex ml-1 items-center justify-center transition-colors bg-transparent hover:bg-muted-foreground/25 rounded-md '>
                    <Pencil className='h-4 w-4' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar