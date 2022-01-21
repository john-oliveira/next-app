// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Usuario from '../../../model/Usuario'
import { usuarios } from './dados';


export default function handler(req: NextApiRequest, res: NextApiResponse<Usuario[]>) {
  res.status(200).json(usuarios);
}
