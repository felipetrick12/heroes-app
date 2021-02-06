import React from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export default function HeroeList({publisher}) {

        const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 mx-2">
            {
                heroes.map(hero =>(
                    <HeroeCard 
                    className="text-white"
                    key={hero.id}
                    {...hero}
                    />
                    
                ))
            }
        </div>
    )
}
