import React from 'react'
import './Contador.css'
export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => { // o this sempre vai apontar para  o obejto corretor a partir da =>
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => { // o this sempre vai apontar para  o obejto corretor a partir da =>
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value,
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>Número: {this.state.numero}</h3>
                <div>
                    <label htmlFor="passoinput">Passo: </label>
                    <input id="passoinput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}
                    />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}