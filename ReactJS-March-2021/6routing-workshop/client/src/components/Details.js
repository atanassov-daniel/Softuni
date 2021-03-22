import { Component } from 'react';
import { getOne, like } from '../services/petsService';

export class Details extends Component {
    constructor(props) {
        super(props);

        this.state = { petInfo: {} };
    }

    onLike(id, e) {
        console.log(e.target);
        console.log(id);
        like(id)
            .then(newPetInfo => this.setState(() => ({ petInfo: newPetInfo })))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        getOne(this.props.match.params.id)
            .then(data => this.setState(() => ({ petInfo: data })))
            .catch(error => console.log(error));
    }

    render() {
        const { name, description, imageURL, likes, id } = this.state.petInfo;

        return (
            <section className="detailsOtherPet">
                <h3>{name}</h3>
                <p>Pet counter: {likes}
                    <button className="button" onClick={this.onLike.bind(this, id)} >
                        <i className="fas fa-heart"></i>
                        Pet
                    </button>
                </p>
                <p className="img"><img src={imageURL} alt="pet" /></p>
                <p className="description">{description}</p>
            </section>
        );
    }
}

export default Details;

/*
<h3>Spirit</h3>
<p>Pet counter: 7
    <button className="button" onClick={this.onLike} >
            <i className="fas fa-heart"></i>
        Pet
    </button>
</p>
<p className="img"><img src="http://pngimg.com/uploads/horse/horse_PNG321.png" alt="pet" /></p>
<p className="description">This is my horse Spirit</p>
*/