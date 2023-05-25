import { useState } from "react";

export default function CampoEnvioImagem(props:any){
    const [imagem,setImagem] = useState("");

    function handleImagechange (event: React.ChangeEvent<HTMLInputElement>){
        const reader = new FileReader();
        reader.readAsDataURL(event.currentTarget.files[0]);
        setImagem(reader.result);
    }
 
    return(
        <div>
            <div className="flex w-288 h-31 pb-4 left-745 top-1288">
                <p className="font-poppins font-normal text-22 leading-182 text-right ">Adicionar foto do evento</p>
                <p className="font-poppins font-normal text-red-500 text-right mx-1 text-22 leading-182"><b>*</b></p>
            </div> 
            <div className="pb-6">
                <label htmlFor="arquivo" className="block box-border  w-100 h-5 text-center left-760 top-33 bg-gray-500 border-2 border-gray-300 rounded-lg pb-6">Enviar Arquivo</label>
                <input type="file" id="arquivo" name="arquivo" className="hidden" onChange={handleImagechange}></input>
            </div>  
        </div>

    )
}