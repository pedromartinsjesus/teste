import React, { Component } from 'react';
import Titulo from './titulo';


export default class Texto extends Component {

    state = {
        texto: "Olá mundo",
        name: " ",
    }



    handleOk = () => {

        this.setState({ texto: this.state.name });
        this.props.handleOpen();
    }

    handleInput = (event) => {
        this.setState({ name: event.target.value });
    }


    render() {
        console.log("Render: ", this.state.name);
        return (
            <div>
                <input type="text" onChange={this.handleInput}></input>
                <button onClick={this.handleOk}>{this.props.valor}</button>
                <Titulo titulo={this.state.texto}></Titulo>
            </div>
        );
    }
}



