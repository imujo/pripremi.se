import { useEffect, useState } from 'react'

import { IoIosClose } from 'react-icons/io';


const Napomena = () => {

    const [disclamer, setdisclamer] = useState(0)

    useEffect(() => {
        setdisclamer(1)
    }, [])

    return(
        <div className="napomenaDiv" disclamer={disclamer} >
            <IoIosClose className='close' onClick={()=>setdisclamer(0)} />
            <p className='napomena' >Napomena!</p>
            <p>Ovo nije službena stranica pripreme učenika za Državnu maturu. Za sve točne informacije o provedenim ispitima državne mature i uvid u same ispite posjetite web stranicu
            <a href="https://www.ncvvo.hr/kategorija/drzavna-matura/provedeni-ispiti/" target="_blank" rel="noreferrer noopener" > NCVVO</a>
            </p>
        </div>
    )
}

export default Napomena;