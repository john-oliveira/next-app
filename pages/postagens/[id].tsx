import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Post from "../../model/Post"

const PostagemDetailPage: NextPage<Props> = ({ postagem }) => {
    return (
        <>
            <h3>Detalhes da Postagem</h3>
            Title: {postagem.title}<br />
            Body: {postagem.body}
        </>
    )
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
    const { id } = context.params! // Non-null assertion operator;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const postagem: Post = await res.json()
    return {
        props: {
            postagem
        },
        revalidate: 10
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } }
        ],
        fallback: 'blocking'
    };
}

type Props = {
    postagem: Post;
}

type Params = {
    id: string;
}

export default PostagemDetailPage;