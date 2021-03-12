//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)

import { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="Navigation">
                <ul>
                    <li className="listItem">
                        <img src="/white-origami-bird.png" className="App-logo" alt="logo" />
                    </li>

                    <li className="listItem"><a href="#">Going to 1</a></li>
                    <li className="listItem"><a href="#">Going to 2</a></li>
                    <li className="listItem"><a href="#">Going to 3</a></li>
                    <li className="listItem"><a href="#">Going to 4</a></li>
                    <li className="listItem"><a href="#">Going to 5</a></li>
                    {/* <li className="listItem"><a href="#">Going to 6</a></li> */}
                    {/* <li className="listItem"><a href="#">Going to 7</a></li> */}
                    {/* <li className="listItem"><a href="#">Going to 8</a></li> */}
                    {/* <li className="listItem"><a href="#">Going to 9</a></li> */}
                    {/* <li className="listItem"><a href="#">Going to 10</a></li> */}
                    {/* <li className="listItem"><a href="#">Going to 11</a></li> */}
                </ul>
            </nav>
        );
    }
}

export default NavBar;