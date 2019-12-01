import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'narendra'
        }
        console.log('LifeCycleA constructor')
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecyleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    changeState=() =>{
        this.setState({
            name: 'CodeVolution'
        })
    }

    render() {
        console.log('LifecyleA render')
        return (
            <div>
                <div>
                    LifeCycleA
                </div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
