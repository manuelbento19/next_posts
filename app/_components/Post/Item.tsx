import React from 'react'
import { Post } from '@/app/types'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { BiNews } from 'react-icons/bi'
import Tag from '../Tag'
import Logo from '../Logo'

type PostItemProps = {
    post: Post
}
export function PostItem({post}:PostItemProps) {

    return (
       <article className='flex flex-col p-3 bg-white border rounded-sm shadow cursor-pointer transition hover:border-blue-600'>
            <Logo/>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">{post.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{post.body}</p>
            <Link href={`/${post.id}`} className="group mt-4 flex items-center gap-1 text-sm font-medium text-blue-600"> 
                Read more
                <span className="block transition-all group-hover:ms-0.5"><BsArrowRight/></span>
            </Link>
            <div className="mt-4 flex flex-wrap gap-1">
            {post.tags && post.tags.map((tag,index)=><Tag key={index} label={tag}/>)}
            </div>
        </article>
    )
}
