//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)

import { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="Footer">
                <ul>
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

                    <li className="listItem"><img src="/blue-origami-bird-flipped.png" className="App-logo" alt="logo" />
                    </li>
                </ul>

                <p>Software University &copy; 2019</p>
            </footer>
        );
    }
}

export default Footer;