import { GetServerSideProps, NextPage } from "next"

const PostsPage: NextPage<Props> = ({ posts }) => {
    return (
        <ul>
            {posts.map((po, key) => (
                <li key={key}>{po.title}
                </li>
            ))}
        </ul>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await res.json()

    return {
        props: {
            posts
        }
    }
}

type Post = {
    title: string;
}

type Props = {
    posts: Post[];
}

export default PostsPage;