// Class Component

import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1> Class Component- Welcome {this.props.name} hero is {this.props.heroName}</h1>
    }
}

export default Welcome