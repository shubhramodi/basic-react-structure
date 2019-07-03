import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getPersonList, getPersonListNew} from '../actions/index';
import Aux from '../hoc/Aux';

class Persons extends Component {

    render() {
        return (
            <Aux>
                <button onClick={() => this.props.getPersonList({})}>Add Person</button>
                <button onClick={() => this.props.getPersonListNew({})}>Delete Person</button>
                Hello
                <h1>{console.log(this.props.personReducer)}</h1>
            </Aux>
        );
    }
}

function mapStateToProps({personReducer}) {
    return {personReducer};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getPersonList, getPersonListNew}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);