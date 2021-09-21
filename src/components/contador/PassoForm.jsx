import React from 'react'

export default (props) => {
    return (
        <div>
            <label htmlFor="passoinput">Passo: </label>
            <input id="passoinput"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)}
            />
        </div>
    )
}