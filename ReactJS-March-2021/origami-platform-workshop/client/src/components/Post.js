import { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Post">
                <img src="./blue-origami-bird.png" alt="logo" />

                <p className="description">
                    {this.props.data.description || 'No Description Provided'}
                </p>

                <div>
                    <span>
                        <small>Author: </small>
                        {this.props.data.author || 'No Author Provided'}
                    </span>
                </div>
            </div>
        );
    }
}

export default Post;