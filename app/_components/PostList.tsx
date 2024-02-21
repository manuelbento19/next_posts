import React from 'react'
import { Post } from '@/app/types'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { BiNews } from 'react-icons/bi'
import Tag from './Tag'

export async function PostList() {
    const response = await fetch("https://dummyjson.com/posts",{
        next: {
            tags: ["posts"]
        }
    })

    const data:{posts:Post[]}= await response.json()

    return (
        <ul className="col-span-2 h-screen overflow-auto p-3 grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            {data && data.posts.map(item=>(
                <li key={item.id} className='flex flex-col p-3 bg-white border rounded-sm shadow cursor-pointer transition hover:border-blue-600'>
                    <div className="w-fit rounded bg-blue-600 p-2 text-white">
                        <BiNews size={22}/>
                    </div>
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{item.body}</p>
                    <Link href="" className="group mt-4 flex items-center gap-1 text-sm font-medium text-blue-600"> 
                        Read more
                        <span className="block transition-all group-hover:ms-0.5"><BsArrowRight/></span>
                    </Link>
                    <div className="mt-4 flex flex-wrap gap-1">
                    {item.tags && item.tags.map((tag,index)=><Tag key={index} label={tag}/>)}
                    </div>
                </li>
            ))}
        </ul>
    )
}
