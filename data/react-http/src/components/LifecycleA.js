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


static getDerivedStateFromProps(props,state){
    console.log('LifecyleA getDerivedStateFromProps')
    return null;
}

componentDidMount(){
    console.log('LifecycleA componentDidMount');
}

    render() {
        console.log('LifecyleA render')
        return (
            <div>
                <div>
                    LifeCycleA
                </div>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
