import ReactDom from 'react-dom'
import './index.css' //usar importaçao realitva
import React from 'react'

import App from './App'


ReactDom.render( <
    App / > ,
    document.getElementById('root') // chamada em JS puro para chamaa o ID
)