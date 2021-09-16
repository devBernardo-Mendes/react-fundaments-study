import React from 'react'
import './App.css'

import Primeiro from './components/basics/First'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmentos'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import ListaAlunos from './components/repetiçao/ListaAlunos'
import TabelasProdutos from './components/repetiçao/TabelasProdutos'
import ParOuImpar from './components/condicional/ParIOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicaçao/DiretaPai'
import IndiretaPai from './components/comunicaçao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

export default () => (

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#12 - Contador" color="#929292">
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo="#11 - Componente controlado" color="#53a58a">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicaçao Indireta" color="#472525">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicaçao Direta" color="#fc7100">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderizcao condicional" color="#fcf800">
                <ParOuImpar numero={91}> </ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ email: 'nando@gmail.com' }} />
            </Card>

            <Card titulo="#07 - Desafio Tabela" color="#00f4fc">
                <TabelasProdutos />
            </Card>

            <Card titulo="#05 - Componentes repetiçao" color="#fc00c5">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componentes com Filho" color="#fc0000">
                <Familia />
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#090">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo=" #03 - Fragmento" color="#609">
                <Fragmento />
            </Card>

            <Card titulo=" #02 - Com Parametro" color="#309">
                <ComParametro
                    titulo="Situaçao do Aluno"
                    aluno="Pedro Mendes" nota={8.7}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#098">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

)