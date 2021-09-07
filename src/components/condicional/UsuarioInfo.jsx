import React from 'react'
import If, { Else } from './if'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja Bem Vindo <strong>Amigao</strong>
                </Else>
            </If>
        </div>
    )
}