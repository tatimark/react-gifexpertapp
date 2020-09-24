import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

//los Custom Hooks funcionan como funcional components efectos , contextos, usar reuser
export const useFetchGifs = ( category ) =>{

    const [state, setState ] = useState({
        data: [],
        loading: true
    })

        useEffect( () => {
         getGifs( category ).then( img =>{

            // setTimeout(() =>{
                setState({
                    data: img,
                    loading: false
                });

            // }, 2000);
          
         } );
     }, [ category ])



    //  setTimeout( () => {
    //     setState({
    //         data:[1,2,3],
    //         loading: false
    //     })
    //  }, 3000 );
          
    
    
    return state; //  la data, el loading 

}