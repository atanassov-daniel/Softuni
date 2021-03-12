import { Component } from "react";
import refreshComponent from "../hoc/refreshComponent";
import Message from "./Message";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.refreshCount);

        /* return this.props.refreshCount > 0 ?
            <footer>
                <Message text="All rights reserved &copy;" />
            </footer>
            : '' */
        return (
            <footer>
                <Message text="All rights reserved &copy;" />
            </footer>
        );
    }
}

export default refreshComponent(Footer);

/* this was the first example for the lifecycle methods, the above one is for HOCs
import { Component } from "react";
import Message from "./Message";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFooter: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showFooter: false });
        }, 10000)
    }

    render() {
        return this.state.showFooter && <footer>
            <Message text="All rights reserved &copy;" />
        </footer>
    }
}

export default Footer;
*/