import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Reverse extends React.PureComponent {
    render(){
        const { onReverse } = this.props;
    return (
        <button type= 'button' className = "revese" onClick={onReverse(this.history)}>Reverse</button>
    );
    }
}
const mapStateToProps = (state) =>{
    return {
        history : state.history,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        onReverse: (history) =>{
            dispatch(actions.reverse(history));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Reverse);