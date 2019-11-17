import React from 'react'

// function Greet(){
//     return <h1> Hello Narendra</h1>
// }

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1> {props.name} hero is {props.heroName}
            </h1>
            {props.children}
        </div>)

}

export default Greet;


// named export

// export const Greet = () => <h1> Hello Narendra </h1>