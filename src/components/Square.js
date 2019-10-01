import React from 'react';
import '../Game.css';

class Square extends React.PureComponent{
    render(){
        const {winColor , value,onClick} = this.props;
        
        return <button type='button' className = {winColor} onClick={onClick}>{value}</button>
    }
}
export default Square;