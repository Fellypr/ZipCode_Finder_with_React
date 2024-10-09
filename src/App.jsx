import './App.css'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import Axios from "axios";

function App() {
  const [input,setInput] = useState("");
  const [cep,setCep] = useState("");

  async function SearchCep(){
    try{
      const response =  await Axios.get(`https://viacep.com.br/ws/${input}/json`);
      setCep(response.data);
      setInput("");
    }catch{
      alert("ERRO AO PROCURAR O CEP\nPorfavor tente novamente ou verifique se o cep ta escrito corretamente");
    }
    
  }
  return (
    <div>
      <div className='container'>
        <h1>Buscador de cep</h1>
        <div className='inputbutton'>
          <input  value={input} onChange={(e) => setInput(e.target.value)}  type="text" placeholder='Coloque Aqui Seu Cep exemplo"01001-000"'/>
          <button className='search' onClick={SearchCep}><CiSearch /></button>
        </div>

         {cep && Object.keys(cep).length > 0 &&(
          
          <div className="result">
            <p>Cep: <strong>{cep.cep}</strong></p>
            <p>Logradouro: <strong>{cep.logradouro}</strong></p>
            <p>Localidade: <strong>{cep.localidade}</strong></p>
            <p>DDD: <strong>{cep.ddd}</strong></p>
            <p>Regiao: <strong>{cep.regiao}</strong></p>
          </div>

        )}
      </div>
    
      
    </div>
  )
}

export default App
