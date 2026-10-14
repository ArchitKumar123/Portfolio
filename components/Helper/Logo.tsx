import { CodeSquareIcon } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center space-x-2'>
        <div className='w-10 h-10 bg-blue-800 dark:bg-blue-700 rounded-lg flex items-center justify-center flex-col'>
            <CodeSquareIcon className='w-6 h-6 text-white' />
        </div>
        <h1 className='sm:text-xl hidden sm:block md:text-2xl text-blue-800 dark:text-blue-700 font-bold'>{"<AKR/>"}</h1>
    </div>
  )
}

export default Logo