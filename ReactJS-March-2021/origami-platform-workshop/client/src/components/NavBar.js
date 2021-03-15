//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)

import { Component } from 'react';
import { NavLinks } from './NavLinks';

class NavBar extends Component {
    render() {
        return (
            <nav className="Navigation">
                <ul>
                    <li className="listItem">
                        <img src="/white-origami-bird.png" className="Nav-logo" alt="logo" />
                    </li>

                    <NavLinks />
                </ul>
            </nav>
        );
    }
}

export default NavBar;