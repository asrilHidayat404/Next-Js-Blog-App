import { AllPosts } from '@/datas/read'
import Posts from '../components/Posts'


const page = async () => {
    const posts = await AllPosts()
    console.log(posts);
    
    
    return (
        <main className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
                All Posts({posts.length})
            </h1>
            <Posts posts={posts} />
        </main>
    )
}

export default page