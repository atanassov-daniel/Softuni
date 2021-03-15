import { Component } from 'react';

class Post extends Component {
    render() {
        const postInfo = this.props.postInfo;

        return (
            <div className="Post">
                <img src="./blue-origami-bird.png" alt="logo" />

                <p className="description">
                    {postInfo.description || 'No Description Provided'}
                </p>

                <div>
                    <span>
                        <small>Author: </small> {postInfo.author || 'No Author Provided'}
                    </span>
                </div>
            </div>
        );
    }
}

export default Post;