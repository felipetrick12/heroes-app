import React from 'react'

export default function LoginScree({history}) {

    const handleLogin =() => {
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
