

const Header = () => {
    console.log(window.innerWidth)
    return(
        <div className='headerDiv'>
            <div className="title">
                <h1 className='logo'>PRIPREMI<div className='nastavak'>SE</div></h1>
            </div>
            <p className='subheading' >Skidanje matura i pripreme za test</p>
        </div>
    )
}

export default Header;