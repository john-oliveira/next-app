import { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import Post from "../../model/Post"

const PostsPage: NextPage<Props> = ({ posts }) => {
    return (
        <ul>
            {posts.map((po, key) => (
                <li key={key}>{po.title} {" | "}
                    <Link href={`/postagens/${po.id}`}>
                        <a>Visualizar</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()

    return {
        props: {
            posts
        },
        revalidate: 10
    }
}

type Props = {
    posts: Post[];
}

export default PostsPage;