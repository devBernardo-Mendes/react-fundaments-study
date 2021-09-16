import React, { useState } from 'react'
import './Input'

export default (props) => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input value={valor} onChange={quandoMudar}/> 
                <input value={valor} readOnly/>
                <input value={undefined}/>
            </div>
        </div>
    )
}


// export default (props) => {
//     const[valor, setValor] = useState('Inicial')
//     return(
//         <div className="Input">
//            <input value={valor} />
//         </div>
//     )
// }
// Esse componet so ira mudar quando usar o setState 