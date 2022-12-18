import React from "react";
import { useParams , useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function Counteur() { const {id} = useParams();
    const navigate = useNavigate();
    const backacceuil = () => { navigate('/');
    }

  const [counteur, setCounteur] = useState(0);
  const Augmenter = () => { setCounteur(count => count + 1);
  };

  const Diminuer = () => { if (counter >0) { setCounteur(count => count - 1);
    }
  };

  const Reset = () => { setCounteur(0)
  }

  return (
    
    <div className="counteur">
    <h1>Counteur</h1>
    <span className="counteur__output">{counter}</span>
    <div className="btn_container">
      <button className="control_btn" onClick={Augmenter}>+</button>
      <button className="control_btn" onClick={Diminuer}>-</button>
      <button className="reset" onClick={Reset}>Reset</button>
    </div>
    <br />
    <br />
    <div>
        <button className="backHome" onClick={backHome}>Acceuil</button>
      </div>
  </div>
  )

}

