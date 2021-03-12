import { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:5000/posts';

        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState(() => ({ posts: data })));
    }

    render() {
        return (
            <div className="Posts">

                {/* <Post /> */}

                {this.state.posts.length === 0 ?
                    'Loading posts...'
                    : this.state.posts.map(postInfo => <Post key={postInfo.id} data={postInfo} />)}
            </div>
        );
    }
}

export default Posts;

