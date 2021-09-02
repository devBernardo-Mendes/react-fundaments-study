import React from 'react'

export default function ComParametro(props){
    const status = props.nota >= 6 ? 'Aprovado' : 'Recuparação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2> { props.titulo }</h2>
           <p>
               <strong>{ props.aluno } </strong>
               tem nota 
               <strong> { notaInt } </strong> 
               e foi 
                <strong> { status } </strong>
           </p>
        </div>
    ) 
}