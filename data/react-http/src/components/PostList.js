import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []

        }
    }
    // only once when loaded
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                List of Posts
            </div>
        )
    }
}

export default PostList
