import Axios from "axios";
import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

async function getDramaMovies() {
  return await Axios.get(
    "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-20&byTags=genre:drama&byYear=2021&byProgramType=movie"
  );
}

function DramaPage() {
  const ViewMovies = () => {
    const [dramaMovies, setDramaMovies] = useState(null);

    React.useEffect(() => {
      getDramaMovies().then((movies) => setDramaMovies(movies));
    }, []);

    if (dramaMovies === null) {
      return <h2>Loading movies, please wait...</h2>;
    }
    return (
      <Row className="cardsComponents" xs={3}>
        {dramaMovies.data.entries.map((e, i) => {
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
      <h1 className="center"> Drama Movies: </h1>
      <Container>
        <ViewMovies />
      </Container>
    </Container>
  );
}

export default DramaPage;
