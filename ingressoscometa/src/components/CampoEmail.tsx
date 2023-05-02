import { useState } from "react";

export default function CampoEmail(props: any){
  const [email, setEmail] = useState('');

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="Insira seu email" 
        required 
        className="border w-64 border-gray-400 rounded-md p-2 mb-8"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  )
}