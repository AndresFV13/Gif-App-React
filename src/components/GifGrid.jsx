import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFecthGifs( category );
  
  return (
    <>
        <h3>{ category }</h3>

        { isLoading && <h2> Cargando Gifs </h2> }

        <div className='card-grid'>
          { 
            images.map( img => (
              <GifItem key={img.id}
                       { ...img }
                        />
            ))
          }
        </div>
    </>
  )
}
