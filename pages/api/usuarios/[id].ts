// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Usuario from '../../../model/Usuario'
import { usuarios } from './dados';


export default function handler(req: NextApiRequest, res: NextApiResponse<Usuario>) {
  let id = req.query.id;
  let usuario: Usuario = { id:'', name: '', username: '', email: ''};
  usuarios.forEach((usu)=>{
      if(usu.id == id){
         usuario = usu;
         return;
      }
  })
  res.status(200).json(usuario);
}