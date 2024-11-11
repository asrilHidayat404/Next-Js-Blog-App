"use server"

import prisma from "@/libs/db"

type Posts = [{
    id: number,
    title: string
}]

export async function AllPosts() {
    const posts: Posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true
        }
    })
    console.log(typeof(posts[0].id));
    
    return posts
}

export async function OnePost(id:number) {
    const post = await prisma.post.findUnique({
        where: {
          id: Number(id)
        }
      })
    return post
}