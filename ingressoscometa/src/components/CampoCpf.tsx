export default function CampoCpf(props: any){
    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="login">CPF</label>
            <input type="text" maxLength={11} name="Cpf" id="cpf" placeholder="Insira apenas números" required pattern="\d*" className="border w-64 border-gray-400 rounded-md p-2 mb-8"/>
        </div>
    )
}