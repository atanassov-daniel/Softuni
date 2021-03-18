//TODO alternatively, make a HOC for the navigations(aside, navbar, footer)
import { Route, Switch } from "react-router-dom";

import Posts from './Posts';
import About from './About';
import ContactUs from './ContactUs';

/* 
import { Component } from 'react';
    class Main extends Component {
        render() {
            return (
                <div className="Main">
                    <h1>Sooooooooome Heading</h1>

                    <Posts />
                </div>
            );
        }
}

export default Main; */

function Main() {
    return (
        <main className="Main">
            <Switch>
                <Route path="/" exact>
                    <h1>Sooooooooome Heading</h1>

                    <Posts />
                </Route>

                <Route path="/about" component={About} />
                <Route path="/contact-us" render={(props) => <h1>Custom Contact Us Page</h1>} />{/* a expression */}
                <Route path="/contact-us" render={(props) => <ContactUs />} />{/* a function that returns a component */}
                <Route path="/contact-us" component={ContactUs} />

                <Route path="/listings/:type/:id" component={Posts}/>

                <Route render={(props) => <h1>Error Page</h1>} />
            </Switch>

        </main>
    );
}

export default Main;