import React from 'react';
import ExtractionPage from '../ExtractionPage';
import InputVar from '../InputVar'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGifts: 3,
            sumbitOk: false,
            min: 1,
            max: 10,
        };
        this.goToExtractionPage = this.goToExtractionPage.bind(this);
        this.changeState = this.changeState.bind(this)
    }

    goToExtractionPage() {
        this.setState({sumbitOk: true})
    }

    changeState(val, value) {
        if (val === "min") {
            this.setState({min: parseInt(value)})
        } else {
            if (val === "max") {
                this.setState({max: parseInt(value)})
            } else {
                if (val === "numberOfGifts") {
                    this.setState({numberOfGifts: parseInt(value)})
                }
            }
        }

    }

    render() {
        let {min, max, sumbitOk, numberOfGifts} = this.state;
        let style = {backgroundColor: "green",  border: "2px solid white", padding: "10px", borderRadius: "25px"};
        console.log(sumbitOk);
        return (

            <div className="d-flex  p-2  bd-highlight justify-content-center" style={{height: "600px"}} >
                {!sumbitOk &&
                <InputVar onSubmit={this.goToExtractionPage} changeState={this.changeState} style={style} />}
                {sumbitOk &&
                <ExtractionPage ownerName={this.props.ownerName} min={min} max={max} quantiyNumber={numberOfGifts} style={style} />
                }
            </div>
        )
    }

}

export default Homepage;
