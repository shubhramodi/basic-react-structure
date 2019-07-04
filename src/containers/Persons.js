import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addPerson, deletePerson, updatePerson} from '../actions/index';
import Aux from '../hoc/Aux';
import Person from '../components/Person';

class Persons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: {
                name: "Test", age: 1, valid: false
            },

            showPerson: true
        }
    }

    nameChangeHandler = (event) => {
        const person = this.state.person;
        let personValue = event.target.value;
        let persons = personValue.split("-");

        const {personReducer} = this.props;
        const data = personReducer.data;
        const personIds = data.map(p => p.id);

        person.id = Math.max.apply(null, personIds) + 1;
        person.name = persons[0];
        person.age = persons[1];
        person.valid = true;
        this.setState({person: person});
    };

    render() {

        let person = null;
        let addButton = null;
        const {personReducer} = this.props;
        const data = personReducer.data;

        if (this.state.showPerson) {
            person = (
                <Aux>
                    {
                        data.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                click={() => this.props.deletePerson(index)}
                                change={(event) => this.props.updatePerson(event, person.id)}
                            />
                        })
                    }
                </Aux>
            );
        }

        if (this.state.person.valid) {
            addButton = (
                <Aux>
                    <button onClick={() => this.props.addPerson(this.state.person)}>Add Person</button>
                </Aux>
            );
        }

        let currentPersonState = (this.state.person.name) + "-" + (this.state.person.age);

        return (
            <Aux>

                <Person
                    name={this.state.person.name}
                    age={this.state.person.age}
                    key={this.state.person.id}
                />
                <p>{addButton}</p>
                <input type="text" onChange={(event) => this.nameChangeHandler(event)}
                       value={currentPersonState}/>
                <p>{personReducer.message}</p>
                <div>{person}</div>
            </Aux>
        );
    }
}

function mapStateToProps({personReducer}) {
    return {personReducer};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addPerson, deletePerson, updatePerson}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);