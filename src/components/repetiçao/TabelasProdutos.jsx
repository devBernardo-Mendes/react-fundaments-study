import React from 'react'

import produtos from '../../data/produtos'
import './TabelasProdutos.css'

export default (props) => {
    const table = produtos.map((produto,) => {
        return (
            <>
                <tr key={produto.id}>
                    <td>
                        {produto.id}
                    </td>
                    <td>
                        {produto.nome}
                    </td>
                    <td>
                        {produto.preço}
                    </td>
                </tr>
            </>
        )
    })
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}