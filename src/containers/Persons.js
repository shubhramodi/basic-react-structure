import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getPersonList, getPersonListNew} from '../actions/index';

class Persons extends Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.getPersonList({})}>Add Person</button>
                <button onClick={() => this.props.getPersonListNew({})}>Delete Person</button>
                Hello
                <h1>{console.log(this.props.personReducer)}</h1>
            </div>
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