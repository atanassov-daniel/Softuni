import { Redirect, useHistory } from 'react-router-dom';

const About = ({
    match
}) => {
    const history = useHistory();

    if (Math.random() > 0.5) {
        history.push('/');

        return null;
    }
    /* if (Math.random() > 0.5) {
            return <Redirect to="/" />
    } */

    return (
        <h1>About Page</h1>
    );
}

export default About;