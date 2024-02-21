import React from 'react'
import { Post } from './types'
import Link from 'next/link'

export default async function PostList() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        next: {
            tags: ["posts"]
        }
    })

    const data:Post[] = await response.json()

    return (
        <ul className="col-span-2 h-screen overflow-auto p-3 grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            {data && data.map(item=>(
                <li key={item.id} className='flex flex-col p-3 bg-white border shadow'>
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{item.body}</p>
                    <Link href="#" className="group mt-4 flex items-center gap-1 text-sm font-medium text-blue-600"> 
                        Read more
                        <span className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
