const DeletePet = () => {
    return (
        <section className="deletePet">
            <h3>Pesho</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> 5</p>
            <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt="pet" /></p>
            <form action="#" method="POST">
                <p className="description">This is my cat Pesho</p>
                <button className="button">Delete</button>
            </form>
        </section>
    )
}

export default DeletePet;