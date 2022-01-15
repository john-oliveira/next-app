import { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import Usuario from "../../model/Usuario"

const UsuariosPage: NextPage<Props> = ({ usuarios }) => {
  return (
    <ul>
      {usuarios.map((usu, key) => (
        <li key={key}>{usu.name} {" | "}
          <Link href={`/usuarios/${usu.id}`}>
            <a>Detalhes</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const usuarios: Usuario[] = await res.json()

  //const usuarios: Usuario[] = [{name: `${Math.random()*10}`}]

  return {
    props: {
      usuarios
    },
    revalidate: 10
  }
}

type Props = {
  usuarios: Usuario[];
}

export default UsuariosPage;