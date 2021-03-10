import { Component } from "react";

class Message extends Component {
    constructor(props) {
        super(props);

        this.start = Date.now();
        console.log(`Constructor - ${Date.now() - this.start}`);

        this.state = {
            company: 'Softuni',
        }
    }

    componentDidMount() {
        console.log(`Component Did Mount - ${Date.now() - this.start}`);

        setTimeout(() => {
            this.setState({
                company: 'SOFTWARE UNIVERSITY',
            });
        }, 5000)
    }

    componentDidUpdate() {
        console.log(`Component DidUpdate - ${Date.now() - this.start}`);
    }

    componentWillUnmount() {
        console.log(`Component WillUnmount - ${Date.now() - this.start}`);
    }

    render() {
        console.log(`Render - ${Date.now() - this.start}`);

        return <span>{this.props.text} | {this.state.company}</span>
    }
}

export default Message;