import React from 'react';
 import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {
    // const [images, setImages ] = useState([]);
    const {data:images , loading} = useFetchGifs( category );


    // // para que solo se produzca una vez y no que se ejecute todo cada vez que le damos al botón
    // useEffect( () => {
    //     getGifs( category ).then( setImages );
    // }, [ category ]) // se pone por si la categoria cambia

    // const  getGifs = async() =>{

    //     const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI( category )}&api_key=40XbpvsJadI7NLNC5vH5Zu1DpOWOg96i`
    //     const resp = await fetch ( url );
    //     const {data} = await resp.json();
    //     const gifs = data.map ( img =>{
    //         return{
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     } )
    //     console.log(gifs);
    //     setImages( gifs );
       
    // }
   
    return ( 
        <>
                <h3 className="animate__animated animate__fadeIn">{ category }</h3>
                 { loading && <p className="animate__animated animate__flash">Cargando...</p>} 
            <div className="card-grid">
            
               
                    {

                        images.map( img => (
                            <GifGridItem
                            {...img }/>
                            ))
                            //  images.map( img => (
                            //     <li key={ img.id }>{ img.title }</li>
                            // ))

                            // images.map( ({id, title}) => (
                            //     <li key={ img.id }>{ img.title }</li>
                            // ))
                    }
            
                
               
            </div>
    </>
    )
}