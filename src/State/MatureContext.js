import React, {useState, createContext, useEffect, useRef} from 'react'

const MatureContext = createContext();

const MatureProvider = (props) => {
    const [request, setrequest] = useState([])
    const initialRender = useRef(true)

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false;
        }else{
            var result = {};
            for (var i = 0; i < request.length; i++) {
                result[request[i].predmet] = {
                    dvijerazine: request[i].dvijerazine,
                    razinaA: request[i].razinaA,
                    razinaB: request[i].razinaB,
                    years: request[i].years
                };
              }
            fetch('http://localhost:5000/matured', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(result)
            })
        }
    }, [request])

    return(
        <MatureContext.Provider value={[request, setrequest]}>
            {props.children}
        </MatureContext.Provider>
    )
}

export {MatureProvider, MatureContext};
