import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../services/petsService';
//!!!! should only show pets that one is not the creator of
//TODO see if I can abstract the other pet as a component

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = { pets: [] };
    }

    componentDidMount() {
        getAll()
            .then(pets => this.setState(() => ({ pets })))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/all">All</Link></li>
                        <li><Link to="/cats">Cats</Link></li>
                        <li><Link to="/dogs">Dogs</Link></li>
                        <li><Link to="/parrots">Parrots</Link></li>
                        <li><Link to="/reptiles">Reptiles</Link></li>
                        <li><Link to="/other">Other</Link></li>
                    </ul>
                </nav>
                <ul className="other-pets-list">
                    {this.state.pets.map(({ id, name, description, imageURL, likes, category }) =>
                        <li className="otherPet" key={id}>
                            <h3>Name: {name}</h3>
                            <p>Category: {category}</p>
                            <p className="img"><img src={imageURL} alt="pet" /></p>
                            <p className="description">{description}</p>
                            <div className="pet-info">
                                <Link to=""><button className="button"><i className="fas fa-heart"></i> Pet</button></Link>
                                <Link to={`/details/${id}`}><button className="button">Details</button></Link>
                                <i className="fas fa-heart"></i> <span> {likes}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        );
    }
}

export default Dashboard
