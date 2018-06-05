import React, {Component} from 'react';

import classes from './Person.css';
import withClass from '../../../hocs/withClass';
import Auxiliary from '../../../hocs/Auxiliary';

class Person extends Component {
  render () {
    return (
      <Auxiliary>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Auxiliary>
    );
  }
}

export default withClass(Person, classes.Person);
