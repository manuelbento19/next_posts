import React from 'react'
import { Post } from '@/app/types'
import { PostItem } from './Item'

export async function PostList() {
    const response = await fetch("https://dummyjson.com/posts",{
        next: {
            tags: ["posts"]
        }
    })

    const data:{posts:Post[]}= await response.json()

    return (
        <ul className="h-[90vh] col-span-2 overflow-auto p-3 grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
            {data && data.posts.map(item=>(
                <li key={item.id}>
                    <PostItem post={item}/>
                </li>
            ))}
        </ul>
    )
}
