import React from 'react'

export default function ClientForm() {
  return (
    <form className="max-w-xs w-full mx-auto mt-[10%] flex flex-col gap-2 bg-white border-2 rounded-sm shadow-md p-5">
        <div className='flex flex-col gap-2'>
            <label htmlFor="title" className='text-sm font-normal text-zinc-800'>Title</label>
            <input type="text" id="title" name='title' className='bg-white text-zinc-600 border border-gray-300 rounded-sm px-2 py-1 outline-blue-500 outline-1'/>
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="body" className='text-sm font-normal text-zinc-800'>Body</label>
            <textarea id="body" name='body' className='border border-gray-300 outline-blue-500 outline-1'></textarea>
        </div>
        <button className='bg-zinc-700 text-white text-sm px-2 py-2 border-0 rounded-sm transition hover:brightness-90'>Register</button>
    </form>
  )
}
