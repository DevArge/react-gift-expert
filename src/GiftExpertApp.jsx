import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([ 'Dragon Ball' ]);

  const onAddCategory = (newCategoryValue)=>{
    // Evitar el uso de push para agregar elementos a un arreglo porque esto hace 
    // que el objeto mute, react trata de no mutar el estado para eso es mejor crear 
    // un nuevo arreglo o un nuevo objeto etc

    if (categories.includes(newCategoryValue)) return;
    

    // setCategories( [...categories, 'SC2'] );
    //  OTRA OPCION  
    setCategories( cat => [newCategoryValue, ...cat ] );

  }

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input  */}
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ onAddCategory }
      />

      {/* Lista de GIFs  */}

      { 
        categories.map( category => (
          <GifGrid 
            key={ category } 
            category={ category } 
          />
        )) 
      }
  
    </>
  )
}
