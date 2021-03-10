import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 11,
            collectionName: 'My Books'
        }

        // not to have to write onClick = { this.function.bind(this) } every time on every button:
        this.resetCounter = this.resetCounter.bind(this);
    }

    decrementCounter(e) {
        // this.setState({ count: this.state.count - 1 });
        // често ипървич начин ще си върши перфектно работата, но втория начин ще ни спести малко главоболия, коагто нещата станат по-сложни
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    incrementCounter(e) {
        // this.setState({ count: this.state.count + 1 });
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    resetCounter(e) {
        console.log("%c event object when running the function", "color: red; text-decoration: bold; font-size: 1.5em");
        console.log(e);
        this.setState(() => ({ count: 0 }));

        setTimeout(() => {
            console.log("%c event object after 10 seconds", "color: aquamarine; text-decoration: bold; font-size: 1.5em");
            console.log(e);
            // !!! it doesn't dissapear, because React somehow remembers there is a reference to it and doesn't nullify it
        }, 10000);
    }

    render() {
        const incrementButtonsStyle = { color: "white", backgroundColor: "black", padding: "1%", width: "8%", textAlign: "center", fontSize: "2.5em", cursor: "pointer" };
        const resetButtonStyle = { color: "white", backgroundColor: "red", padding: "1%", marginLeft: "5%", width: "15%", textAlign: "center", fontSize: "2.5em", cursor: "pointer" };

        return (
            <div className="counter">
                <h3 style={{ color: "blue", backgroundColor: "yellow", padding: "2%", marginLeft: "40%", textAlign: "center", width: "20%" }}>{this.state.collectionName} Counter</h3> {/* => in the DOM "My Books"\n"Counter"*/}
                {/* <h3...>{this.state.collectionName + " Counter"}</h3>          => in the DOM "My Books Counter" */}

                {/* onClick={(e) => this.setState({ count: this.state.count - 1 })} */}
                <button onClick={(e) => this.decrementCounter(e)
                } style={incrementButtonsStyle} >-</button>

                <span style={{ fontWeight: "bold", fontSize: "2em", marginRight: "3%", marginLeft: "3%" }}>{this.state.count}</span>

                {/* <button onClick={(e) => this.setState({ count: this.state.count + 1 })} style={incrementButtonsStyle} >+</button> */}

                <button onClick={this.incrementCounter.bind(this)} style={incrementButtonsStyle} >+</button>
                {/* the event object will directly get passed to the function; we can bind not just this, but other custom arguments too */}
                {/* in the above example with (e) => this.function we have to explicitly pass the event object to the function */}

                {/* <button onClick={this.resetCounter} style={resetButtonStyle} >Reset</button> */}
                {/* the function resetCounter ще се изпълни в контекста на евента => this вече не сочи към текущия компонент, а към нещо друго -> ако беше JS event, this щеше да сочи към самия евент, в Реакт са го махнали това и няма да сочи към нищо => undefined => we have to manually pass it the context by using function.bind(this) */}


                {/* <button onClick={this.resetCounter.bind(this)} style={resetButtonStyle} >Reset</button> */}
                <button onClick={this.resetCounter} style={resetButtonStyle} >Reset</button>
                {/* without .bind(this) only if we do that little hack in the constructor */}
            </div>
        );
    }
}

export default Counter;