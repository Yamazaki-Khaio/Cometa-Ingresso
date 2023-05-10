import { NextApiRequest, NextApiResponse } from 'next';


function removerMascaraCpf(cpfComMascara: string): string {
    // Remove todos os caracteres que não são dígitos
    const cpfSemMascara = cpfComMascara.replace(/\D/g, '');
  
    return cpfSemMascara;
}

async function getUserCpf(cpf : string) :  Promise<any>{
    
      const result = await fetch('http://localhost:3000/api/usuario?cpf='+cpf)
      return  result.json()

}


export default async function handler(req: NextApiRequest,res: NextApiResponse){
   
    const cpfSemMascara = removerMascaraCpf('111.111.111-11');

    const users = await  getUserCpf(cpfSemMascara)
   
    res.json(users[0])
}