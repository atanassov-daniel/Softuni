import { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavLinks extends Component {
    render() {
        return (
            <>
                <li className="listItem"><Link to="/" className="link-fock">Home</Link></li>
                <li className="listItem"><Link to="/about">About</Link></li>
                <li className="listItem"><Link to="/contact-us">Contact Us</Link></li>

                <li className="listItem"><Link to="/listings/posts/1">Going to 1</Link></li>

                <li className="listItem"><a href="#posts/2">Going to 2</a></li>
                <li className="listItem"><a href="#posts/3">Going to 3</a></li>
                <li className="listItem"><a href="#posts/4">Going to 4</a></li>
                <li className="listItem"><a href="#posts/5">Going to 5</a></li>
                {/* <li className="listItem"><a href="#posts/6">Going to 6</a></li> */}
                {/* <li className="listItem"><a href="#posts/7">Going to 7</a></li> */}
                {/* <li className="listItem"><a href="#posts/8">Going to 8</a></li> */}
                {/* <li className="listItem"><a href="#posts/9">Going to 9</a></li> */}
                {/* <li className="listItem"><a href="#posts/10">Going to 10</a></li> */}
                {/* <li className="listItem"><a href="#posts/11">Going to 11</a></li> */}
            </>
        )
    }
}

export default NavLinks;