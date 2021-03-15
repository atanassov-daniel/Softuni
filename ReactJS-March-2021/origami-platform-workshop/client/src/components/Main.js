//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)

import Posts from './Posts';

/* 
import { Component } from 'react';
    class Main extends Component {
        render() {
            return (
                <div className="Main">
                    <h1>Sooooooooome Heading</h1>

                    <Posts />
                </div>
            );
        }
}

export default Main; */

function Main() {

    return (
        <main className="Main">
            <h1>Sooooooooome Heading</h1>

            <Posts />
        </main>
    );
}

export default Main;