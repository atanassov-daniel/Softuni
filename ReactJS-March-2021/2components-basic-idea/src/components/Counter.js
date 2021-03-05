import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 11,
            collectionName: 'My Books'
        }
    }

    render() {
        const incrementButtonsStyle = { color: "white", backgroundColor: "black", padding: "1%", width: "8%", textAlign: "center", fontSize: "2.5em", cursor: "pointer" };

        return (
            <div className="counter">
                <h3 style={{ color: "blue", backgroundColor: "yellow", padding: "2%", marginLeft: "40%", textAlign: "center", width: "20%" }}>{this.state.collectionName} Counter</h3>

                {/* onClick={(e) => this.setState({ count: this.state.count - 1 })} */}
                <button onClick={(e) => this.setState((oldState) => ({ count: oldState.count - 1 }))
                } style={incrementButtonsStyle} >-</button>

                <span style={{ fontWeight: "bold", fontSize: "2em", marginRight: "3%", marginLeft: "3%" }}>{this.state.count}</span>

                <button style={incrementButtonsStyle} onClick={(e) => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        );
    }
}

export default Counter;