import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( {target} ) => {
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const valueClean = inputValue.trim();
        
        if( valueClean.length <= 1 ) return;

        onNewCategory(valueClean);
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue } 
            onChange={ onInputChange }
            />
    </form>
  )
}
