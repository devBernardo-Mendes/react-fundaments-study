import ReactDom from 'react-dom' 
import './index.css' //usar importaçao realitva
import React from 'react' 
import Primeiro from './components/basics/first'


ReactDom.render(
    <div>
        <Primeiro>
            
        </Primeiro>
    </div>,
    document.getElementById('root') // chamada em JS puro para chamaa o ID
)