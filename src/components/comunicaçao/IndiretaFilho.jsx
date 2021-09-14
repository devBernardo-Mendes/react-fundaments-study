import React from 'react'


export default (props) => {
    return (
        <div>
            <div>
                filho
            </div>
            <button onClick={
                function(e){
                    props.quantoClicar('joao', 58, true)
                }

            }>
                Fornecer informaçoes
            </button>
        </div>
    )
}