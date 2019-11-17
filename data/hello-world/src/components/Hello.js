import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //     <h1>Hello Narendra</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummClass' },
        React.createElement(
            'h1',
            null,
            'Hello Narendra'))
}

export default Hello;