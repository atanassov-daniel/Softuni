import { Link } from 'react-router-dom';

const MyPets = () => {
    return (
        <section className="my-pets">
            <h1>My Pets</h1>
            <ul className="my-pets-list">
                <section className="myPet">
                    <h3>Name: Pesho</h3>
                    <p>Category: Cat</p>
                    <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt="pet" /></p>
                    <p className="description">This is my cat Pesho</p>
                    <div className="pet-info">
                        <Link to="/details/:id"><button className="button">Details</button></Link>
                        {/* <a href="#"><button className="button">Details</button></a> */}
                        <Link to="/delete-pet"><button className="button">Delete</button></Link>
                        {/* <a href="#"><button className="button">Delete</button></a> */}
                        <i className="fas fa-heart"></i> <span>5</span>
                    </div>
                </section>
                <section className="myPet">
                    <h3>Name: Pesho</h3>
                    <p>Category: Cat</p>
                    <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt="pet" /></p>
                    <p className="description">This is my cat Pesho</p>
                    <div className="pet-info">
                        <a href="#"><button className="button">Details</button></a>
                        <a href="#"><button className="button">Delete</button></a>
                        <i className="fas fa-heart"></i> <span>5</span>
                    </div>
                </section>
                <section className="myPet">
                    <h3>Name: Pesho</h3>
                    <p>Category: Cat</p>
                    <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt="pet" /></p>
                    <p className="description">This is my cat Pesho</p>
                    <div className="pet-info">
                        <a href="#"><button className="button">Details</button></a>
                        <a href="#"><button className="button">Delete</button></a>
                        <i className="fas fa-heart"></i> <span>5</span>
                    </div>
                </section>
            </ul>
        </section>
    )
}

export default MyPets;