import Axios from "axios";
import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

async function getActionMovies() {
  return await Axios.get(
    "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-20&byTags=genre:action&byYear=2022&byProgramType=movie"
  );
}

function ActionPage() {
  const ViewMovies = () => {
    const [actionMovies, setActionMovies] = useState(null);

    React.useEffect(() => {
      getActionMovies().then((movies) => setActionMovies(movies));
    }, []);

    if (actionMovies === null) {
      return <h2>Loading movies, please wait...</h2>;
    }
    return (
      <Row className="cardsComponents" xs={3}>
        {actionMovies.data.entries.map((e, i) => {
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
      <h1 className="center"> Action Movies: </h1>
      <Container>
        <ViewMovies />
      </Container>
    </Container>
  );
}

export default ActionPage;
