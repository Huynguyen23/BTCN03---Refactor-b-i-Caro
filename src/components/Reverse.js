import React from 'react';

class Reverse extends React.PureComponent {
    render(){
        const {className, onClick} = this.props;
    return (
        <button type= 'button' className = {className} onClick={onClick}>Reverse</button>
    );
    }
}
export default Reverse;