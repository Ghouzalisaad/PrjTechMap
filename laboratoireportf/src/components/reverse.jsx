import React from "react";
import { useParams , useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function Reverse() { const {id} = useParams();
    const navigate = useNavigate();
    const backHome = () => { navigate('/');
    }

  const [reverseStr, setReverseStr] = useState("");
  const [error, setErreur] = useState("");
  let value = "";

   const handleChange = (e) => { valuer = e.target.value ; 
    if (value.length <= 9 ) { let valuerReversed = value.split("").reverse().join("");
      setReverseS(valuerReversed );
    }
    else 
    {
      setError("Erreur, on n'acceptons pas plus que 9 caractéres.")
    }
    
  };
    
    
  };

  return (
    <div className="App">
      <h1> Inverseur d'une phrase</h1>
      <div className="reverse">
        <label className="reservedString">{reverseStr}</label>
      </div>
      <br />
      <form className="String">
        <input className="input" onChange={handleChange} />
      </form>
      <br />
      <div className="erreur">{error}</div>
      <br />
      <br />
      
      <div>
        <button className="backAcceuil" onClick={backAcceuil}>Acceuil</button>
      </div>
      
    </div>
  );








    

  