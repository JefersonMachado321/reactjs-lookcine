import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './lookCine.svg';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>
          <img src={logo} alt="Logotipo do App" />
        </span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Pesquisar</Link>
        <Link to="/favorites">Favoritos</Link>
        {/* <Link to="/cadastrar">Cadastrar Video</Link> */}
      </nav>
    </header>
  );
}
export default Header;
