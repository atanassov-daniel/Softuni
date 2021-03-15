//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)

import { Component } from 'react';
import NavLinks from './NavLinks'

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <ul>
                    <NavLinks />

                    <li className="listItem"><img src="/blue-origami-bird-flipped.png" className="App-logo" alt="logo" />
                    </li>
                </ul>

                <p>Software University &copy; 2019</p>
            </footer>
        );
    }
}

export default Footer;