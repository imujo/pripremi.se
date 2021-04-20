import { Element } from "react-scroll";

const Title = ({title}) => {
    return(
        <Element className="titleDiv" id={title}>
            <h2>{title}</h2>
        </Element> 
    )
}

export default Title;