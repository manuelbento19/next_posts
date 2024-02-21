import React from 'react'
import { Post } from '../types'
import Logo from '../_components/Logo'
import Tag from '../_components/Tag'

type Props = {
    params: {
        id: string
    }
}

export default async function Page({params:{id}}:Props) {

    const request = await fetch(`https://dummyjson.com/posts/${id}`)
    const post:Post = await request.json();

    return (
        <section className='w-full h-full'>
            <div className="mx-auto mt-[10%] max-w-lg w-full bg-white border shadow-sm p-5">
                <dl className="my-5">
                    <Logo/>
                </dl>
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Title</dt>
                        <dd className="text-gray-700 sm:col-span-2">{post.title}</dd>
                    </div>
                </dl>
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Description</dt>
                        <dd className="text-gray-700 sm:col-span-2">{post.body}</dd>
                    </div>
                </dl>
                {post.tags && (
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Tags</dt>
                        <dd className="text-gray-700 sm:col-span-2">{post.tags.map((tag,index)=><Tag key={index} label={tag}/>)}</dd>
                    </div>
                </dl>
                )}
                
                
            </div>
        </section>
    )
}
