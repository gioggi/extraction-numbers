import React, { useState }  from 'react'
import Number from '../../components/Number'
import ButtonStrap from '../../components/Button'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Style from './style.css';
class ExtractionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantiyNumber:this.props.quantiyNumber,
            numberMin: this.props.min,
            numberMax: this.props.max,
            on: false
        };
        this.changeNumber = this.changeNumber.bind(this);
        this.generateRandom = this.generateRandom.bind(this);
    }

    generateRandom(min, max) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (this.state.numbers.includes(num)) ? this.generateRandom(min, max) : num;
    }


    changeNumber() {
        let min = this.state.numberMin;
        let max = this.state.numberMax;
        this.state.numbers=  [];
        this.state.numbersObject=  [];
        this.state.on=   true;
        for (let i = 0; i < this.state.quantiyNumber; ++i) {
            let x = this.generateRandom(min, max);
            this.state.numbers.push(x) ;
            let timeForTransition = 500 +  ((i+1) * 200);
            this.state.numbersObject.push(  <Number text={x} title={`${i+1}° Premio`}/>                )
        }
        this.forceUpdate();
    }
    render() {
        return <div className="align-self-center" style={this.props.style}>
            <h1> Estrazione di {this.props.ownerName} </h1>
            <div className="flex-row" style={Style}>


                    <div className="flex-row">
                    <TransitionGroup>
                        {this.state.numbersObject && Object.keys(this.state.numbersObject).map(key =>

                                <CSSTransition key={key} in={this.state.on} timeout={(800 + ((parseInt(key) + 1) * 1000))}
                                               classNames='alert'>
                                    <div id={parseInt(key)*1000} className="flex-row">
                                        {this.state.numbersObject[key]}
                                    </div>
                                </CSSTransition>



                        )

                        }
                    </TransitionGroup>


                    </div>

                { !this.state.numbers && <ButtonStrap text="Estrai, buona fortuna!" onClick={this.changeNumber}/>}


            </div>
        </div>
    }

}

export default ExtractionPage
