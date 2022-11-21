import Axios from "axios";
import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

async function getHorrorMovies() {
  return await Axios.get(
    "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-20&byTags=genre:horror&byYear=2021&byProgramType=movie"
  );
}

function HorrorPage() {
  const ViewMovies = () => {
    const [horrorMovies, setHorrorMovies] = useState(null);

    React.useEffect(() => {
      getHorrorMovies().then((movies) => setHorrorMovies(movies));
    }, []);

    if (horrorMovies === null) {
      return <h2>Loading movies, please wait...</h2>;
    }
    return (
      <Row className="cardsComponents" xs={3}>
        {horrorMovies.data.entries.map((e, i) => {
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
      <h1 className="center"> Horror Movies: </h1>
      <Container>
        <ViewMovies />
      </Container>
    </Container>
  );
}

export default HorrorPage;
