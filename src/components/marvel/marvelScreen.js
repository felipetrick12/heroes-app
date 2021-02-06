import React from 'react'
import HeroeList from '../heroes/HeroeList'

export default function marvelScreen() {
    return (
        < >
       
            <h1 className="m-4" >Marvel Screen</h1>
            <hr/>
            
            <HeroeList publisher="Marvel Comics"/>
        </>
    )
}
