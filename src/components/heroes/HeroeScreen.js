import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import { getHeroesById } from '../selectors/getHeroesById';

export default function HeroeScreen() {

       const {heroeId}= useParams();
        const hero = getHeroesById(heroeId);

        const {
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters,
        }= hero;

        console.log(hero)

        if(!hero){
            return <Redirect to='/'/>
        }
    return (
        <>
            <h1 className='m-3'>Hero Screen</h1>
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="..." alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
