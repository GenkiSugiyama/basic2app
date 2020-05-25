import React, {Component } from 'react';
import { connect } from 'react-redux';
import { setName, setAge, setNull } from './actions/userActions';

class App extends Component {
  clickSetName() {
    this.props.setName("Taro Yamada");
  }

  clickSetAge() {
    this.props.setAge(30);
  }

  clickSetNull() {
    this.props.SetNull();
  }

  render() {
    return(
      <div>
        <button onClick={this.clickSetName.bind(this)}>Set Name</button>
        {this.props.name} <br />
        <button onClick={this.clickSetAge.bind(this)}>Set Age</button>
        {this.props.age} <br />
        <button onClick={this.props.setNull.bind(this)}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name)),
    setAge: (age) => dispatch(setAge(age)),
    setNull: () => dispatch(setNull())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)