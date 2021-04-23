

const Header = () => {
    console.log(window.innerWidth)
    return(
        <div className='headerDiv'>
            <div className="title">
                <h1 className='logo'>PRIPREMI<div className='nastavak'>SE</div></h1>
            </div>
            <p className='subheading' >Preuzumanje matura i pripreme za ispit</p>
        </div>
    )
}

export default Header;