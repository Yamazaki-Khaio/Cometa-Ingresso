export default function CampoSenha(props: any){
    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Insira Sua senha"  id="senha" className="border w-64 border-gray-400 rounded-md p-2 mb-8"/>
        </div>
    )
}