import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // {/* Best approach, Official way*/}
        this.clickHandler = this.clickHandler.bind(this)
    }
    // this keyword undefined in Event Bind
    // hence binding is required.
    // First 3 ways.
    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye !'
    //     })
    //     console.log(this)
    // }
    // Property way, Last way
    clickHandler = () => {
        this.setState({
            message: 'GoodBye !'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* First approach, whole rerender*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Second approach, whole rerender*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* Best approach, Official way No brackets at end. Binding in class constructor hence better*/}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* Property way*/}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
