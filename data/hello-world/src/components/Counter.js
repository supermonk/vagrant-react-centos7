import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     () => {
        //         console.log('Callback, synchronus', this.state.count)
        //     }
        // )
        // Synchronous way, so this is how we will end up using
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        // this is called asynchrosly
        // console.log(this.state.count);
    }
    incrementFive() {
        // All are parallel :( good for FE, not sure for backup
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter

