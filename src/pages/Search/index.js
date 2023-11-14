import Container from '../../components/Container';
import Header from '../../components/Header';
import videos from '../../json/videos.json';
import Footer from '../../components/Footer';
import style from './Search.module.css';
import SearchVideoList from '../../components/SearchVideosList';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Search() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>
        <section className={style.search}>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}
export default Search;
