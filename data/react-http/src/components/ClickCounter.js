import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

// Higher order function
class ClickCounter extends Component {

    render() {
        // destructor
        const { count, incrementCount } = this.props
        return (
            <div>
                <button
                    onClick={incrementCount}>
                    {this.props.name}
                    Clicked {count} times
                </button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
