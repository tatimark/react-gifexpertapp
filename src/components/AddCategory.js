import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

const [inputValue, setInputValue] = useState('')
const handleInputChange = ( e ) =>{
    // console.log(e.target.value)
    setInputValue(e.target.value);
}

const handleSubmit = (e) =>{
    //evitar el refresh del formulario
    e.preventDefault();
    //llamar setCategories
    //  console.log(setCategories);

    if ( inputValue.trim().length > 2 ){
   
        setCategories(cats =>[inputValue, ...cats ]);
        setInputValue('');
    }
    
    // setCategories(cats =>[...cats, 'Hunter']);
}
    return (

    
        <form onSubmit={ handleSubmit }>
            <input
             type="text"
             value={ inputValue }
             onChange={ handleInputChange }
            />
        </form>
   
    )
}

// AddCategory.propTypes = {
//     setCategories: PropTypes.func.isRequerid
// }