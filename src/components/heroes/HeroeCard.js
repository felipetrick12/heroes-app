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
        console.log(id);
        return (
            <div class="row g-0">
            <div class="col-md-4">
            <img src={`../../assets/${id}.jpg`} className='card-img' alt={superhero}/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{superhero}</h5>
                <p class="card-text">{alter_ego}</p>
                {
                    (alter_ego!==characters) &&
                    <p class="card-text">{characters}</p> 
                }
                <p class="card-text"><small class="text-muted">{first_appearance}</small></p>
                <Link to={`/heroe/${id}`}> Mas...</Link>
            </div>
            </div>
        </div>
        )
}
