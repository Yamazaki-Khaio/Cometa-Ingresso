export default function CampoEmail(props: any){
    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="senha">Email</label>
            <input type="txt" name="email" id="email" className="border w-64 border-gray-400 rounded-md p-2 mb-8"/>
        </div>
    )
}