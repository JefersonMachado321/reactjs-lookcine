import Footer from '../../components/Footer';
import Header from '../../components/Header';
import style from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>💀 Pagina não Localizada ☠️</h1>
        <h1>👻</h1>
      </div>
      <Footer />
    </>
  );
}
export default PageNotFound;
