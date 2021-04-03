import { Link } from "react-scroll";

const Nav = () => {

    return(
        <nav className="navBody">
            <div className='logo'>PRIPREMI<div className='nastavak'>SE</div></div>
            <ul>
            <Link
                activeClass="active"
                to="MATURE"
                spy={true}
                smooth={true}
                duration={400}>
            <li>Mature</li></Link>
            <Link
                activeClass="active"
                to=""
                spy={true}
                smooth={true}
                duration={400}>
            <li onClick={()=>alert('Work in progress')}>Natjecanja</li></Link>
            </ul>
            <button className='kontakt' >Kontakt</button>
        </nav>
    )
}

export default Nav;