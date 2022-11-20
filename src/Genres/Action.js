import Axios from 'axios';
import React, {useState} from 'react';
import MovieCard from '../Components/MovieCard';
import {Container, Row, Col} from "react-bootstrap";

async function getActionMovies() {
    return await Axios.get("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-20&byTags=genre:action&byYear=2017&byProgramType=movie")
}

function ActionPage () {

    const ViewMovies = ()=> {
        const [actionMovies, setActionMovies] = useState(null);

        React.useEffect(() => {
            getActionMovies().then(movies => setActionMovies(movies));
        }, []);
    
        if (actionMovies === null) {
            return <p>Loading movies, please wait...</p>;
        }
        return (
            <Row xs={3}>
            { actionMovies.data.entries.map((e, i) => {
                return (
                    <Col xs={{maxWidth: "330px"}}>
                        <MovieCard
                            title= { e.title }
                            description= {e.description}
                            image= {e.plprogram$thumbnails[Object.keys(e.plprogram$thumbnails)[0]].plprogram$url}
                        />
                    </Col>
                )
            }) }
            </Row>
        )
    }

    return ( 
        <Container>
            <h1> Action Page </h1>
            <Container>
                <ViewMovies />
            </Container>
        </Container>
    )
}

export default ActionPage