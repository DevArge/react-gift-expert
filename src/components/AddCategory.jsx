import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target })=>{
        // evento.target.value 
        setinputValue( target.value )
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories(cat => [inputValue, ...cat] )
        onNewCategory( inputValue.trim() )
        setinputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar GIFs"
                value={ inputValue }
                // onChange= { (evento) => onInputChange(evento) }
                onChange= { onInputChange }
            />
        </form>
    )
}
