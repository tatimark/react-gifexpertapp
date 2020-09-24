import React, { useState } from 'react'; 
import { Fragment } from 'react'; 
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




export const GifExpertApp = () => { 
    // const categories = ['One punch', 'Samurai', 'Dragon Ball']; así no se hace a menos que no vaya a cambiar el array
   const [categories, setCategories] = useState(['One punch']);

//    const handleAdd = () =>{
//         setCategories(['HunterXHunter', ...categories ]);
//         //setCategories(cats =>[...cats, 'Hunter']);
//    }
    return (
        <Fragment>
        <h2> GifExpertApp
        </h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />
        {/* <button  onClick={ handleAdd }>Agregar</button> */}
        <ol>
           {
               categories.map( (category ) => 
            
                <GifGrid 
                key={ category }
                category= { category } />
               )
           }
        </ol>
        </Fragment>
      
     
        ); 
    }