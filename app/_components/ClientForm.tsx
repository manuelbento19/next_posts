
import React from 'react'
import { Post } from '../types'
import { revalidateTag } from 'next/cache'

type CreatePostDTO = Pick<Post,"title"|"body"|"userId">

export function ClientForm() {

  const registerPost = async (form: FormData) => {
    "use server"
    const data: CreatePostDTO = {
      title: String(form.get("title")),
      body: String(form.get("body")),
      userId: 1
    } 
    await fetch("https://dummyjson.com/posts/add",{
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    revalidateTag("posts")
  }

  return (
    <form action={registerPost} className="max-w-xs w-full mx-auto mt-[10%] flex flex-col gap-2 bg-white border-2 rounded-sm shadow-md p-5">
      <div className='flex flex-col gap-2'>
        <label htmlFor="title" className='text-sm font-normal text-zinc-800'>Title</label>
        <input required type="text" id="title" name='title' className='bg-white text-zinc-600 border border-gray-300 rounded-sm px-2 py-1 outline-blue-500 outline-1'/>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="body" className='text-sm font-normal text-zinc-800'>Body</label>
        <textarea required id="body" name='body' className='border border-gray-300 outline-blue-500 outline-1'></textarea>
      </div>
      <button type='submit' className='bg-blue-600 text-white text-sm px-2 py-2 border-0 rounded-sm transition hover:brightness-90'>Register</button>
    </form>
  )
}
