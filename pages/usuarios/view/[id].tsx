import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Usuario from "../../../model/Usuario"

const UsuarioDetailPage: NextPage<Props> = ({ usuario }) => {
    return (
        <>
            <h3>Detalhes do Usuário</h3>
            Name: {usuario.name}<br />
            Username: {usuario.username}<br />
            Email: {usuario.email}
        </>
    )
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
    const { id } = context.params! // Non-null assertion operator;
    //const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const res = await fetch(`http://localhost:3000/api/usuarios/view/${id}`)
    const usuario: Usuario = await res.json()
    return {
        props: {
            usuario
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
    usuario: Usuario;
}

type Params = {
    id: string;
}

export default UsuarioDetailPage;