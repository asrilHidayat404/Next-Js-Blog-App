"use server"

import prisma from "@/libs/db"

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string
    const body = formData.get("body") as string
    await prisma.post.create({
        data:{
            title,
            body
        }
    })
}