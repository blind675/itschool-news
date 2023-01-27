import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getNewsList } from "../api/adaptors";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { useFetch } from "../utils/hooks/useFetch";

function Home() {
  const technologyNewsEndpoint = getNewsCategoryEndpoint("technology", 1, 6);
  const technologyData = useFetch(technologyNewsEndpoint);
  const adaptedTechnologyNewsList = getNewsList(technologyData);

  const footballNewsEndpoint = getNewsCategoryEndpoint("football", 1, 6);
  const footballData = useFetch(footballNewsEndpoint);
  const adaptedFootballNewsList = getNewsList(footballData);

  return (
    <Layout>
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyNewsList} />
          <p>
            Vezi toate stirile legate de technologie in sectiunea{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fotbal</h1>
          <NewsCardList newsList={adaptedFootballNewsList} />
          <p>
            Vezi toate stirile legate de fotbal in sectiunea{" "}
            <Link to="/category/technology" className="text-secondary">
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p>
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
