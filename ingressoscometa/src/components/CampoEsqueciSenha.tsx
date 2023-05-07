import Link from 'next/link'
import CampoEmail from './CampoEmail'

export default function CampoEsqueciSenha(props: any){
    return(
        <Link href="/esqueciSenha">
            <div className="flex justify-center items-center flex-col gap-4">
                <div style={{ cursor: 'pointer' }}>Insira seu email para procurar a sua conta.</div>
                <CampoEmail/>
            </div>
        </Link>
    )
}
