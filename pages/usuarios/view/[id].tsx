import { GetServerSideProps, NextPage } from "next"
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

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const { id } = context.params! // Non-null assertion operator;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const usuario: Usuario = await res.json()
    return {
        props: {
            usuario
        }
    }
}

type Props = {
    usuario: Usuario;
}

type Params = {
    id: string;
}

export default UsuarioDetailPage;