import React from 'react'
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            state: '',
            city: '',
            newCountry: '',
            newState: '',
            newCity: '',
        };
    }
    render() {
        return (

            <>
                <input type="text" placeholder="Country" value={this.state.newCountry} onChange={(e) => this.setState({ newCountry: e.target.value })} />
                <input type="text" placeholder="State" value={this.state.newState} onChange={(e) => this.setState({ newState: e.target.value })} />
                <input type="text" placeholder="City" value={this.state.newCity} onChange={(e) => this.setState({ newCity: e.target.value })} />
                <button>Add</button>
            </>
        )
    }
}