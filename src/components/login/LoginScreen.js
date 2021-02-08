import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export default function LoginScree({history}) {

    const {dispatch} = useContext(AuthContext);
    

    
    const handleLogin =() => {

        dispatch({
        type: types.login, 
        payload:{
          name:'Felipe',
          }
        });

     history.replace('/')

    }
    
    return (
        <div className="container-fluid text-center p-5">
            <div className="card ">
                    <h1 className=''>Login</h1>
            <div className="card-body">
                <h5 className="card-title py-5">Ingresar</h5>
                
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
            </div>
        </div>
        
       
    )
}
