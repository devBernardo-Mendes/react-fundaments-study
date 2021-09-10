import React from 'react'
import DiretaFilho from './DiretaFilho' // passar comunicaçao do filho para pai é por meio de props

export default (props) => {
    return (
        <div>
            <DiretaFilho nome='Bernardo' idade={21} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Gabriel' idade={19} nerd={true}></DiretaFilho>
            <DiretaFilho nome='Matheus' idade={21} nerd={true}></DiretaFilho>
        </div>
    )
}