import { OnePost } from '@/datas/read'
import React from 'react'

type Params = {
  params: {
    id: number
  } 
}
const page = async ({ params }: Params ) => {
  const num = 1
  console.log(num);
  
  const { id } = await params
  const post = await OnePost(params.id)
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        {post.title}
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">
        {post.body}
      </p>
    </main>
  )
}

export default page