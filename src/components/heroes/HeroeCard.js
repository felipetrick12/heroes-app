import React from 'react'
import { Link } from 'react-router-dom'

export const  HeroeCard =(
    
    {
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters, 
    }) =>{
       
        return (
            <div className=" row g-0 ">
            <div className="col-md-4">
            <img src={`../../assets/${id}.jpg`} className='card-img animate__animated  animate__flipInX' alt={superhero}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>
                {
                    (alter_ego!==characters) &&
                    <p className="card-text">{characters}</p> 
                }
                <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                <Link to={`/heroe/${id}`}> Mas...</Link>
            </div>
            </div>
        </div>
        )
}
