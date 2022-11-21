import Axios from "axios";
import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

async function getCrimeMovies() {
  return await Axios.get(
    "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-20&byTags=genre:crime&byYear=2021&byProgramType=movie"
  );
}

function CrimePage() {
  const ViewMovies = () => {
    const [crimeMovies, setCrimeMovies] = useState(null);

    React.useEffect(() => {
      getCrimeMovies().then((movies) => setCrimeMovies(movies));
    }, []);

    if (crimeMovies === null) {
      return <h2>Loading movies, please wait...</h2>;
    }
    return (
      <Row className="cardsComponents" xs={3}>
        {crimeMovies.data.entries.map((e, i) => {
          return (
            <Col xs={{ maxWidth: "330px" }}>
              <MovieCard
                title={e.title}
                // description={e.description}
                image={
                  e.plprogram$thumbnails[Object.keys(e.plprogram$thumbnails)[0]].plprogram$url
                }
              />
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <Container>
      <h1 className="center"> Crime Movies: </h1>
      <Container>
        <ViewMovies />
      </Container>
    </Container>
  );
}

export default CrimePage;
