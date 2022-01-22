import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router";
import React, { useState } from "react";
import Usuario from "../../../model/Usuario"

const UsuarioDetailPage: NextPage<Props> = ({ usuario }) => {
  const [name, setName] = useState(usuario.name);
  const [username, setUsername] = useState(usuario.username);
  const [email, setEmail] = useState(usuario.email);

  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    usuario.name = name;
    usuario.username = username;
    usuario.email = email;
    /*const res = await fetch(`http://localhost:3000/api/usuarios/add`, {
      method: 'POST',
      body: JSON.stringify(usuario)
    })*/

    //if(res.status == 200){
      router.push('/usuarios');
    //}
  }

  return (
    <>
      <h3>Edição do Usuário</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/><br />
        <label>Username:</label><br />
        <input type="text" value={username} onChange={e=>{setUsername(e.target.value)}}/><br />
        <label>Email:</label><br />
        <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
        <button type="submit">Salvar</button>
      </form>
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