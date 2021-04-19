import { useEffect, useState, useContext } from "react";
import { FiChevronDown } from 'react-icons/fi';
import {MatureContext} from '../State/MatureContext'

const SortButton = () => {

    const [notSelected, setnotSelected] = useState(['A - Z', 'Z - A'])
    const sortOptions = ['Popularno', 'A - Z', 'Z - A']
    const [isexpanded, setisexpanded] = useState(0)
    const [expand, setexpand] = useState(0)
    const [shrink, setshrink] = useState(0)

    const { sort} = useContext(MatureContext)
    const [sortOrder, setsortOrder] = sort;

    useEffect(() => {

        let newOptions = []
        for (const option of sortOptions){
            if (option === sortOrder){
                continue
            }else{
                newOptions.push(option)
            }
        }
        setnotSelected(newOptions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortOrder])

    const iconClick = () => {
        if (isexpanded===0){
            setexpand(1)
        }else{
            setshrink(1)
            setisexpanded(0)
        }
    }
    
    const animationEnd = () => {
        if (expand===1){
            setexpand(0)
            setisexpanded(1)
        }
        if (shrink===1){
            setshrink(0)
        }
    }
    
    

    return(
        <div className="sortButtonBody">
            <div className='name'>
                <p>{sortOrder}</p>
                <div className="expandIcon" onClick={iconClick}><FiChevronDown /></div>
            </div>
            <div 
                className="expanded" 
                isexpanded={isexpanded}
                expand={expand}
                shrink={shrink}
                onAnimationEnd={animationEnd}
            >
            {
                isexpanded ?

                notSelected.map((option, i)=>{
                    return(
                        <p 
                            key={i}
                            onMouseDown={()=>setsortOrder(option)}
                            onMouseUp={iconClick}
                        >{option}</p>
                    )
                })

                :

                <></>
            }
            </div>
            
        </div>
    )
}

export default SortButton;