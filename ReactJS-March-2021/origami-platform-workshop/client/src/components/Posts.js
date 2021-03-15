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
            .then(data => this.setState(() => ({ posts: data })))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="Posts">
                {this.state.posts.length === 0 ?
                    <strong style={{ fontSize: "5em", textAlign: "center" }}>Loading posts...</strong>
                    : this.state.posts.map(postInfo =>
                        <Post
                            key={postInfo.id}
                            postInfo={postInfo}
                        />
                    )}
            </div>
        );
    }
}

export default Posts;

