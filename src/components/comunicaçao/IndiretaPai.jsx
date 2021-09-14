import React from 'react'
import IndiretaFilho from './IndiretaFilho' // passar comunicaçao do filho para pai é por meio de props

export default (props) => {
    function fornecerInformaçoes(nome, idade, nerd) {
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho quantoClicar={fornecerInformaçoes}></IndiretaFilho>
        </div>
    )
}