import { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getNewsDetails } from "../api/adaptors";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import { addToFavorites } from "../store/actions";
import { FavoritesContext } from "../store/context";
import { getFormattedDate } from "../utils/date";
import { useFetch } from "../utils/hooks/useFetch";
import styles from "./NewsDetails.module.css";

function NewsDetails() {
  let { newsId } = useParams();
  newsId = decodeURIComponent(newsId);

  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  const newsDetails = useFetch(newsDetailsEndpoint);
  const adaptedNewsDetails = getNewsDetails(newsDetails);

  const { title, description, image, date, author, content, thumbnail } =
    adaptedNewsDetails;

  const { favDispatch } = useContext(FavoritesContext);

  function handleAddToFavorites(news) {
    const actionResult = addToFavorites(news);

    favDispatch(actionResult);
  }

  return (
    <Layout>
      <Container className={`${styles.newsDetails} my-5`}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: image }}
            ></div>
            <div className="d-flex justify-content-between algin-item-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{getFormattedDate(date)}</p>
              </div>
              <Button
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    title: title,
                    description: description,
                    thumbnail: thumbnail,
                    hasCloseButton: true,
                  });
                }}
              >
                Adauga la favorite
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
