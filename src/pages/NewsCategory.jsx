import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getNewsList } from "../api/adaptors";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { useFetch } from "../utils/hooks/useFetch";

function NewsCategory() {
  const { categoryId } = useParams();

  const newsCategoryEndpoint = getNewsCategoryEndpoint(categoryId);
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNewsList = getNewsList(news);

  console.log(adaptedNewsList);

  let title = "";
  switch (categoryId) {
    case "technology":
      title = "Tech";
      break;
    case "football":
      title = "Fotbal";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={adaptedNewsList} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
