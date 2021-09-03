import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Bernardo" sobrenome="Mendes" />
            <FamiliaMembro nome="Isabella" sobrenome="Avelar" />
            <FamiliaMembro nome="Gabriel" sobrenome="Reis" />

        </div>
    )
}