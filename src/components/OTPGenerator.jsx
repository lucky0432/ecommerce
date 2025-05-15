import React from 'react'
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null,
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        const number = this.state.number;

        if (number.length === 10 && Number(number)) {
            const randomNumber = Math.floor( Math.random() * 5000);
            console.log(randomNumber);
            this.setState({ random: randomNumber });
        }
        else {
            alert('not valid');
        }
    }
    myChangeHandler = (event) => {
        this.setState({ number: event.target.value });
    }
    render() {
        return (
            <>
                <form onSubmit={this.mySubmitHandler}>
                    <p>Enter Phone Number</p>
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                    // value={this.state.number}
                    />
                    <input
                        type='submit'

                    />
                    <br />
                    OTP Generatred for This Number : <p>{this.state.number}</p>
                    
                    <br />OTP : <p>{this.state.random}</p>
                </form>
            </>
        );
    }
}