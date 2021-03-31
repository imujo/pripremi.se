
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const CardList = () => {

    const primaryOptions = {
        type: 'slide',
        autoWidth: true,
        drag: false,
        gap: '80px',
        // rewind: true,
        perMove: 1,
        pagination: true,
        focus: 'center',
        trimSpace: false,
        start: 1,
    }
    return(
        <div className='cardListDiv'>
            {/* <div className="gradientLeft"></div> */}
            <Splide  options={primaryOptions}>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
            </Splide>
            {/* <div className="gradientRight"></div> */}
        </div>
    )
}

export default CardList;