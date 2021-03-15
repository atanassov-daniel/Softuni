//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)

import { Component } from 'react';
import { NavLinks } from './NavLinks';

class Aside extends Component {
    render() {
        return (
            <aside className="Aside">
                <ul>
                    <NavLinks />
                </ul>
            </aside>
        );
    }
}

export default Aside;

