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
            <li className='navFont'>Mature</li></Link>
            <Link
                activeClass="active"
                to="KONTAKT"
                spy={true}
                smooth={true}
                duration={400}>
            <li className='navFont' >Kontakt</li></Link>
            </ul>
            <button className='doniraj' >Doniraj</button>
        </nav>
    )
}

export default Nav;