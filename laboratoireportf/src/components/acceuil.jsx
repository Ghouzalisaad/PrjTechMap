import { useParams , useNavigate } from 'react-router-dom';
import React from 'react'

const Home = () => { const {id} = useParams();
    const navigate = useNavigate();
    const toCounteur = () => { navigate('/counteur');
    }
    const toReverse = () => { navigate('/reverse');
    }

    return(
       <>
       <div>
        <button className='acceuil' onClick={toCounter}>Counter Labo </button>
        </div>
        <div>
        <button className='acceuil' onClick={toReverse}> Reverse phrase Labo </button>
    
    </div>
    </> 
    )
}
export default Home