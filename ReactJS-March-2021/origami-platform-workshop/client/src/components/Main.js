//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)

import { Component } from 'react';
import Posts from './Posts';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Main">
                <h1>Sooooooooome Heading</h1>

                <Posts />
            </div>
        );
    }
}

export default Main;