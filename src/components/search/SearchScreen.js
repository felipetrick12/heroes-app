import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import {getHeroeByName} from '../selectors/getHeroeByName';


export default function SearchScreen({history}) {

    const location= useLocation();
    
    const {q=''}= queryString.parse(location.search);

    const [values,handleinputChange] =useForm({searchText:q});
    
    const {searchText}=values;
    
    const heroesFilter=useMemo(() => getHeroeByName(q), [q])
    
    
    const handleSubmit=(e)=> {
            e.preventDefault();
            history.push(`?q=${searchText}`);
    }
    
     //esto es lo que se va enviar al hook
    
   //extrae la cadena final
    
    
    
    return (
        <>
            <h1 className='m-3'>Search </h1>
            <hr/>

            <div className="row">
                <div className="col-4 m-3">
                    <h4>Search Heroe</h4>
                    <hr/>
                <form onSubmit={handleSubmit}> 
                    <input 
                    type="text"
                    placeholder="find your heroe"
                    className="form-control"
                    name='searchText'
                    autoComplete='off'
                    value={searchText} //lo que se va enviar al hook
                    onChange={handleinputChange}

                    />
                    <div className="d-grid ">
                    <button 
                    type="submit"
                    className="btn mt-2 btn-outline-primary"
                    >
                        Search
                    </button>
                    </div>
                </form>
                    
                </div>
                <div className="col-7">
                    <h4>
                        Results
                    </h4>
                    <hr/>

                    {
                        heroesFilter.map(hero=> (
                            <HeroeCard 
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }
                    {
                        (q==='')
                        && <div className='alert alert-info'>
                                Search a Hero
                        </div>
                    }
                    {
                        (q!=='' && heroesFilter.length==0)
                        && <div className='alert alert-danger'>
                               there is a no hero call {q}
                        </div>
                    }
                        
                </div>

            </div>
        </>
    )
}
