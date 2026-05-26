import { ArrowLeft } from 'lucide-react';
import React from 'react'

const CreateChannelPage = () => {
  const nevigate = useNavigate();
  return (
    <div className='min-h-screen w-full dark:darkLayout text-primary'>
      <header className='flex items-center gap-2 p-4'>
        <button onClick={() => nevigate(-1)}><ArrowLeft /></button>
        <span>Create Channel</span>
      </header>
    </div>
  )
}

export default CreateChannelPage
