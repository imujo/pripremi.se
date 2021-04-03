
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

const CardList = () => {

    const primaryOptions = {
        type: 'slide',
        autoWidth: true,
        drag: false,
        gap: '80px',
        rewind: true,
        perMove: 1,
        pagination: false,
        focus: 'center',
        trimSpace: false,
        start: 1,
        height: "450px",
        padding: {
            top: "10rem"
        }
    }

    const [mature, setMature] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/mature')
            .then(res => res.json())
            .then(data => setMature(data))
    }, [])

    
    return(
        <div className='cardListDiv'>
            <div className="gradientLeft"></div>
            <Splide className='splide'  options={primaryOptions}>
                {mature.map((matura, i) =>{
                    return(
                        <SplideSlide key={i}><Card 
                            predmet={matura.predmet}
                            slika={matura.slika}
                            dvijerazine={matura.dvijerazine}
                            
                        /></SplideSlide>
                    )
                })}
            </Splide>
            <div className="gradientRight"></div>
        </div>
    )
}

export default CardList;