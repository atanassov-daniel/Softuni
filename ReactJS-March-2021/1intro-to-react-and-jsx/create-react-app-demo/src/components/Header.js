/* function Header() {
    let heading1Message = 'Hello From React JSX Component';

    return (
        <header>
            <h1>{`${heading1Message}...`}</h1>
            <h2>The best framework ever</h2>
        </header>
    );
} */

function Header(props) {
    // props.children are the children passed directly between the opening and closing tags of the component

    return (
        <header className="heading">
            <h1>{props.children}</h1>
            <h2>The best framework ever</h2>
        </header>
    );
}

export default Header;