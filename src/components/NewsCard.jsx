import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { removeFromFavorites } from "../store/actions";
import { FavoritesContext } from "../store/context";
import styles from "./NewsCard.module.css";

function NewsCard(props) {
  const { id, title, thumbnail, description, hasCloseButton } = props;

  const { favDispatch } = useContext(FavoritesContext);

  function handleRemoveFromFav(newsId) {
    const actionResult = removeFromFavorites(newsId);

    favDispatch(actionResult);
  }

  return (
    <Card
      className={`${styles.newsCard} h-100 d-flex flex-column justify-content-between align-items-center`}
    >
      <Link to={`/news/${encodeURIComponent(id)}`}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {hasCloseButton && (
        <Button
          variant="light"
          onClick={() => {
            handleRemoveFromFav(id);
          }}
        >
          <span className="material-icons text-dark">close</span>
        </Button>
      )}
    </Card>
  );
}

export default NewsCard;
