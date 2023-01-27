import { useContext } from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import NewsCardList from "../components/NewsCardList";
import { FavoritesContext } from "../store/context";

function Favorites() {
  const { favState } = useContext(FavoritesContext);
  // const { favNews } = favState; // = const favState.favNews

  // const props = {
  //   age: 33,
  //   name: 'Bob',
  //   address: { street : 'ceva' }
  // }

  // const { age, name, address} = bob;

  // age  // bob.age

  return (
    <Layout>
      <Container>
        <h1 className="mb-5 pt-3">Stirile tale favorite</h1>
        <NewsCardList newsList={favState.favNews} />
      </Container>
    </Layout>
  );
}

export default Favorites;
