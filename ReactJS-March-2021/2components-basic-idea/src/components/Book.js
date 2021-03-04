function Book(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {/* if there is no description => an empty <p> -> <p></p> */}
        </article>
    );
}

export default Book;