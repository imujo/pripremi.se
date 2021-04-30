import { Link } from "react-scroll";

const Nav = () => {


    return(
        <nav className="navBody">
            <div className='logoSvg'></div>
            <ul>
            <Link
                activeClass="active"
                to="MATURE"
                spy={true}
                smooth={true}
                duration={400}>
            <li className='navFont'>Mature</li></Link>
            <Link
                activeClass="active"
                to="KONTAKT"
                spy={true}
                smooth={true}
                duration={400}>
            <li className='navFont' >Kontakt</li></Link>
            </ul>
            <button className='doniraj' onClick={()=>alert('Trenutno ne primamo financijske donacije. Podržite nas tako da podijelite stranicu s drugima :)')} >Doniraj</button>
            
        </nav>
    )
}

export default Nav;




  




