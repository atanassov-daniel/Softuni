function Heading(props) {
    // header>h1{Hello, world}+h2{React is the best}
    return (
        <header>
            {props.children}
        </header>
    );
}

export default Heading;