// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Usuario from '../../../model/Usuario'
import { usuarios } from './dados';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method != 'POST'){
        res.status(405).json({ message: 'Method Not Allowed' })
    }else{ 
        const usuario: Usuario = JSON.parse(req.body);
        const index = usuarios.findIndex(o => o.id == usuario.id);
        usuarios[index] = usuario
        res.status(200).json({ message: 'OK' });
    }
}
