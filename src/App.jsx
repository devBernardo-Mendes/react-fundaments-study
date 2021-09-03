import React from 'react'
import './App.css'

import Primeiro from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmentos'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'

export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 -Desafio Aleatorio">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo=" #03 -Fragmento">
                <Fragmento />
            </Card>

            <Card titulo=" #02 -Com Parametro">
                <ComParametro
                    titulo="Situaçao do Aluno"
                    aluno="Pedro Mendes" nota={8.7}
                />
            </Card>

            <Card titulo="#01 - Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

)