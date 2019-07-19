import React from 'react';
import Style from './Number.css';

import {Card, CardText,CardTitle} from 'reactstrap';

class Number extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="number" style={Style}>
                <Card>
                    <CardTitle>
                        {this.props.title}
                    </CardTitle>
                    <CardText>
                        <span className="badge badge-success">{this.props.text}</span>
                    </CardText>
                </Card>
            </div>

        )
    }

}

export default Number;
