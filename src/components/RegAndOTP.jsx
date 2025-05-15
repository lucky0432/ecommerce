import React from 'react'
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regExp: '',
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        const { regExp } = this.state;
        const regExps = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regExps.test(regExp)) {
            alert('Success: Valid email format!');
        } else {
            alert('Error: Invalid email format!');
        }

    }
    myChangeHandler = (event) => {
        this.setState({ regExp: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                {/* <h1>Hello {this.state.username}</h1> */}
                <p>Enter Email</p>
                <input
                    type='email'
                    onChange={this.myChangeHandler}
                />
                <input
                    type='submit'

                />
            </form>
        );
    }
}