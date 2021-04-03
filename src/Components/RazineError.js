// TODO fix error showing when opening cards after hitting "Preuzmi"

const RazineError = ({razinaerror}) => {
    return(
        <div className="razineErrorDiv errorFont" razinaerror={razinaerror} >
            Niste označili razine
        </div>
    )
}

export default RazineError;