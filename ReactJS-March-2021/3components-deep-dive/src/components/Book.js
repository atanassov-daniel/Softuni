import style from "./Book.module.css";

function Book(props) { // the book is just a presentational component, the logic(clickHandler comes from its parent) -> this is a really common practice
    /* if (!props.title) {
        return (
            <article>
                <p style={{ color: "red", textDecoration: "bold", fontSize: "2em" }}>No information provided</p>
            </article >
        );
    } */

    return (
        // <article onClick={(e) => console.log(`${props.title} has just been clicked!`)}>
        <article>
            <h3 onClick={props.clickHandler}>{props.title ? <i>{props.title}</i> : <strong className="no-title" style={{ color: "red", fontSize: "2em" }}>No Title Provided</strong>}</h3>
            <p className={style.description}>{props.description || 'Default Description'}</p>
            {/* if there is no description => an empty <p>: <p></p> */}
        </article>
    );
}

export default Book;