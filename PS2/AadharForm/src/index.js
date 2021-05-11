
import ReactDOM from 'react-dom';
import React from 'react';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let fullnam = event.target.fullname;
    let value = event.target.value;
    this.setState({[fullnam]: value});
  }
  render() {
    return (
      <form>
      <h1>Aadhar Registration</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Birthdate:</p>
      <input
        type='date'
        name='Birthdate'
        onChange={this.myChangeHandler}
      />
       <p>City:</p>
      <input
        type='text'
        name='City'
        onChange={this.myChangeHandler}
      />
       <p>Pincode:</p>
      <input
        type='number'
        name='Pincode'
        onChange={this.myChangeHandler}
      /><br/><br/>
      <button> Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));