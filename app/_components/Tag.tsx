import React from 'react'

type TagProps = {
    label: string;
}

export default function Tag({label}:TagProps) {
  return (
    <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
        {label}
    </span>
  )
}

