
import { Giftitem } from './Giftitem';
import { useFetchGift } from "../hooks/useFetchGift";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGift( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
       
            <div className="card-grid">
                    {
                        images.map((image)=>(
                            <Giftitem 
                                key={ image.id }
                                // una forma para esparcir todas las propiedades para 
                                // no definirlas una a una
                                { ...image }
                            >
                            </Giftitem> 
                        ))
                    }
            </div>
        </>
    )
}
