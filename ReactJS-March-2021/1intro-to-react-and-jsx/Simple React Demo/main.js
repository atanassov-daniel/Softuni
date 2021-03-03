const domElement = document.getElementById('root');

// const reactElement = React.createElement('h1', {}, 'Hello from this React Element'); // this method creates a React element
// name of the element we want to create, what attributes(called props) we want to pass in to the element, the children of this element(in this case just some text)

// to get a React element to the DOM tree, we need a second library -> `react-dom@17`
// ReactDOM.render(reactElement, domElement); // give it one and just one React element and it will integrate this element as a child to the passed in DOM element

/* React and ReactDOM(just a way to connect the elements with the DOM of the browser) are separate, because sometimes we don't need the DOM tree and with it ReactDOM, like in React Native for example, where React works separate from a DOM tree */

/* const reactElement = React.createElement( // this way we can create a deeply nested DOM tree
    'header', // a header element that has two children -> h1 and h2
    {},
    React.createElement('h1', {}, 'Hello from this React Element'),
    React.createElement('h2', {}, 'H@ The best framework ever'),
);

ReactDOM.render(reactElement, domElement);
// console.log(reactElement);
*/

/* този начин е сложен и лесно можем да се изгубим жестоко при направат на по-сложно приложение
=> за целта на помощ идва JSX syntax-a
=> to use JSX we need the Babel library which will transpile the above code to something else -> for this goal we need a program that will understand the JSX syntax and transform it into something like in the above example, which the browser can understand

*/




/* const reactJsxElement = <h1>Hello From React JSX Element</h1>; // JSX adds the well known HTMl syntax inside our JS code // this code the browser can't understand, we need a program that will transpile it to `React.createElement('h1', {}, 'Hello From React JSX Element')` which the browser understands */

const reactJsxElement = (
    <header>
        <h1>Hello From React JSX Element</h1>
        <h2>The best framework ever</h2>  
    </header>
); // this will be translated to the top example and React will execute it the way it is in the above example, but the JSX syntax is much easier for us as devs to read

// така работи Реакт отдолу, оттук вече дълбочините рязко стават по-големи

ReactDOM.render(reactJsxElement, domElement);
