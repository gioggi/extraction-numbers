import React from 'react';
import {Button} from 'reactstrap'
class RandomButton extends React.Component{
 constructor(props){
     super(props);
 }

 render(){
     return(
         <Button type={this.props.type || ''} onClick={this.props.onClick}>{this.props.text}</Button>
     )
 }
}
export default RandomButton
