import CardTitlePicture from './CardTitlePicture'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useState } from 'react';


const Card = () => {
    const [resize, setResize] = useState(0)
    const [isactive, setIsActive] = useState(0)

    function handleClick() {
        setResize(1)
        if (isactive===0){
            setIsActive(1)
        }else{
            setIsActive(0)
        }
        
        
    }

    return(
        <div className='cardDiv'>
            <div 
                className='imageAnimation' 
                onClick={handleClick}
                onAnimationEnd={()=>setResize(0)}
                resize={resize}
                isactive={isactive}
                black='black'
            >
                <CardTitlePicture/>
            </div>
        </div>
    )
}

export default Card;