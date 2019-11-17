import React from 'react'

// function Greet(){
//     return <h1> Hello Narendra</h1>
// }

// const Greet = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1> {props.name} hero is {props.heroName}
//             </h1>
//             {props.children}  
//         </div>)

// }

// Funtional way- Parameter,
// const Greet = ({ name, heroName, children }) => {
//     return (
//         <div>
//             <h1> {name} hero is {heroName}
//             </h1>
//             {children}
//         </div>)

// }


// Funtional way- Body,

const Greet = props => {
    const { name, heroName, children } = props
    return (
        <div>
            <h1> {name} hero is {heroName}
            </h1>
            {children}
        </div>)

}



// props.children is not clean
export default Greet;


// named export

// export const Greet = () => <h1> Hello Narendra </h1>