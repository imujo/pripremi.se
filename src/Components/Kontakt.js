import emailjs from 'emailjs-com';
import { useState } from 'react';



const Kontakt = () => {

    const [sent, setsent] = useState(0)
    const [notsent, setnotsent] = useState(0)

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rnf9fwd', 'template_qyggx9e' , e.target, 'user_75P8SGsgcUd9zU5svZeJ9')
        .then((result) => {
            setsent(1)
            setTimeout(function(){ setsent(0) }, 4000);
        }, (error) => {
            setnotsent(1)
            setTimeout(function(){ setnotsent(0) }, 4000);
        });
        e.target.reset()
    }
    
    

    return(
        <div className="kontaktBody">
            <div className="kontaktDiv">
                <form onSubmit={sendEmail}>
                    <div className="nameDiv">
                        <input type="text" required className='fName input-narrow' placeholder='Ime' name='fName'/>
                        <input type="text" required className='lName input-narrow' placeholder='Prezime' name='lName' />
                    </div>
                    <input type="email" required className='email input-wide' placeholder='Email' name='email' />
                    <textarea required className='message input-wide' placeholder='Poruka' name='message' />
                    <input className='preuzmiButton posaljiButton' type="submit" value="Pošalji"/>
                    <div className="sent" sent={sent} notsent={notsent} >
                        {sent ? <p>Poslano!</p> : undefined}
                        {notsent ? <p>Nije poslano...</p> : undefined}
                    </div>
                    
                </form> 
                <div className="aboutDiv">
                    <h5>O nama</h5>
                    <div className="paragraf">     
                        <p>Tko smo mi ?</p>
                        <p>Mi smo tri gimnazijalca koji su se potaknuti lošim iskustvom pripreme za maturu preko postojeće stranice za preuzimanje matura odlučili pokušati pomoći ne samo sebi nego i svim drugim budućim pristupnicima ispitu državne mature kako bi se što lakše i kvalitetnije pripremili za taj ispit.</p>
                        <p>Želimo vam svu sreću u pripremama i pri polaganju ispita državne mature!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontakt;