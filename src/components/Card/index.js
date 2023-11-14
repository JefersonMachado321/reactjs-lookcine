import { Link } from 'react-router-dom';
import style from './Card.module.css';
import iconFavorites from './favorite.png'; /*Branco */
import iconUnFavorites from './unfavorite.png'; /*Vermelho */
import { useFavoriteContext } from '../../context/Favorites';

function Card({ id }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icone = isFavorite ? iconUnFavorites : iconFavorites;

  return (
    <section className={style.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="Capa do video"
          className={style.capa}
        />
      </Link>
      <figure className={style.icon}>
        <img
          src={icone}
          alt="favorita video"
          onClick={() => addFavorite({ id })}
        />
      </figure>
    </section>
  );
}
export default Card;
