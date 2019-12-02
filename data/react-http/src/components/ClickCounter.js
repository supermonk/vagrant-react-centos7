import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

// Higher order function
class ClickCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0

        }
    }
    // count the clicks
    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.incrementCount}> {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
