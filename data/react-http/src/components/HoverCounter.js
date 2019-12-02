import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {


    render() {
        // destructor
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}> {this.props.name} Hovered {count} times</h2>
            </div>
        )
    }

}

export default UpdatedComponent(HoverCounter,10)
