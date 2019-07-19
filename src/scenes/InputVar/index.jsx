import React from 'react'
import { Button, InputGroup, Input, InputGroupAddon } from 'reactstrap';
import ButtonStrap from "../../components/Button";

class InputVar extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        this.props.onSubmit();
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        this.props.changeState(name,value)
    }
    render() {
        return(
            <div className="align-self-center" style={this.props.style}>

                <h1>Benvenuta,<br/>
                    compila i dati per continuare:
                </h1>

                <InputGroup>
                    <InputGroupAddon addonType="prepend">Inizo numero Random</InputGroupAddon>
                    <Input name="min" onChange={this.handleChange} placeholder="Esempio: 1" />
                    <InputGroupAddon addonType="prepend">Fine numero Random</InputGroupAddon>
                    <Input name="max" onChange={this.handleChange} placeholder="Esempio: 10" />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Numero di regali</InputGroupAddon>
                    <Input name="numberOfGifts" onChange={this.handleChange} placeholder="Esempio: 3" />
                </InputGroup>
                    <ButtonStrap text="Vai all'estrazione!" onClick={this.props.onSubmit}/>

            </div>
        )
    }

}

export default InputVar;
