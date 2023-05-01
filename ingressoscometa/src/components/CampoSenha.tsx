export default function CampoSenha(props: any){
    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" className="border border-gray-400 rounded-md p-2"/>
        </div>
    )
}