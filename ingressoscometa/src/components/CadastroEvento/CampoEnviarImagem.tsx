import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function CampoEnvioImagem(props: any) {
  const [imagem, setImagem] = useState("");
  const [preview, setPreview] = useState("");

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagem(file);
      setPreview(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleRemoveImage() {
    setImagem("");
    setPreview("");
  }

  return (
    <div>
      <div className="flex w-288 h-31 pb-4 left-745 top-1288">
        <p className="font-poppins font-normal text-22 leading-182 text-right">
          Adicionar foto do evento
        </p>
        <p className="font-poppins font-normal text-red-500 text-right mx-1 text-22 leading-182">
          <b>*</b>
        </p>
      </div>
      <div className="pb-6">
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Imagem"
              className="max-w-64 h-auto"
              style={{ maxWidth: "200px" }}
            />
            <button
              className="absolute top-0 right-0 bg-gray-500 text-white px-2 py-1 rounded"
              onClick={handleRemoveImage}
            >
              <FaTimes className="text-red-500" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="arquivo"
            className="block box-border w-100 h-5 text-center left-760 top-33 bg-gray-500 border-2 border-gray-300 rounded-lg pb-6 cursor-pointer"
          >
            Enviar Arquivo
          </label>
        )}
        <input
          type="file"
          id="arquivo"
          name="arquivo"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
