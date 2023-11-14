import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VideosList from '../../components/VideosList';
import { useFavoriteContext } from '../../context/Favorites';
import style from './Favorites.module.css';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>
        <div className={style.favorites}>
          <h1>Videos favorites</h1>
          {<VideosList videos={favorite} emptyHeading="Sem favoritos" />}
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Favorites;
