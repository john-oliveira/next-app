import { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import Usuario from "../../model/Usuario"

const UsuariosPage: NextPage<Props> = ({ usuarios }) => {
  return (
    <ul>
      {usuarios.map((usu, key) => (
        <li key={key}>{usu.name} {" | "}
          <Link href={`/usuarios/view/${usu.id}`}>
            <a>Visualizar</a>
          </Link>
          {" | "}
          <Link href={`/usuarios/edit/${usu.id}`}>
            <a>Editar</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios: Usuario[] = await res.json();

  return {
    props: {
      usuarios
    }
  }
}

type Props = {
  usuarios: Usuario[];
}

export default UsuariosPage;