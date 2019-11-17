import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

// eventHandler if function not functioncall
//<button onClick={clickHandler}>Click</button> Function
//<button onClick={clickHandler()}>Click</button> Function call.
export default FunctionClick
