import React from 'react'

export default props => {
    const { min, max} = props
    
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p>Valor Minimo: {props.min}</p>
            <p>Valor Minimo: {props.max}</p>
            <p>Valor Escolhido: {aleatorio}</p>
        </div>
    )
}