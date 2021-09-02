import ReactDom from 'react-dom' 
import './index.css' //usar importaçao realitva
import React from 'react' 
import Primeiro from './components/basics/first'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmentos'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro  
        titulo="Situaçao do Aluno"
        aluno="Pedro Mendes" nota={8.7} /> 
    </div>,
    document.getElementById('root') // chamada em JS puro para chamaa o ID
)