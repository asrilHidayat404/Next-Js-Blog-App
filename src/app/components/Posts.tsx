import Link from "next/link"

type Posts = {
    id: number,
    title: string
}

type PostProps = {
    posts: Posts[]
}

const Posts = ({ posts }: PostProps) => {
    return (
        <ul className=''>
            {
                posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Posts