/* това е лош пример, но все пак -> ако ни се налага всеки компонент след някакво време да го
ъпдейтваме, а това няма как да го изнесем като отделен компонент
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ showFooter: false });
        }, 10000)
    }
*/
import { Component } from 'react';

// this could also be done using a curry function
// we can pass another argument to the function too -> for example the time for the setTimeout()
function refreshComponent(WrappedComponent) { // the component to be wrapped, so that it can automatically refresh in some seconds
    return class extends Component { // we don't even have to name the class, it can be anonymous
        constructor(props) {
            super(props);

            this.state = { refreshCount: 0, }
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({ refreshCount: this.state.refreshCount + 1 })
            }, 2500);
        }

        render() {
            // if we don't pass in props here, we would lose them in the new component => whatever props were passed, we'll pass them all down
            return <WrappedComponent {...this.props} refreshCount={this.state.refreshCount} />
        }
    }
}

export default refreshComponent;