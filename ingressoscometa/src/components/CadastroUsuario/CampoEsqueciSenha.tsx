import Link from 'next/link'
import CampoEmail from './CampoEmail'

export default function CampoEsqueciSenha(props: any){
    return(
        <Link href="/esqueciSenha">
        <div style={{ cursor: 'pointer' }}>Esqueci a senha</div>
        </Link>
    )
}
