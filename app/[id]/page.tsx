import React from 'react'
import { Post } from '../types'

type Props = {
    params: {
        id: string
    }
}

export default async function Page({params:{id}}:Props) {

    const request = await fetch(`https://dummyjson.com/posts/${id}`)
    const data:Post = await request.json();

    return (
        <div className="m-auto max-w-md w-full bg-white border shadow-sm p-5">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Title</dt>
                    <dd className="text-gray-700 sm:col-span-2">{data.title}</dd>
                </div>
            </dl>
        </div>
    )
}
