// Class Component

import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props
        // intresting
        // const {state1, state2} = this.state
        return <h1> Class Component- Welcome {name} hero is {heroName}</h1>
    }
}

export default Welcome