import { useEffect, useState } from 'react';
import VideosList from '../VideosList';
import style from './SearchVideosList.module.css';
import Loade from '../Loader';

//Filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText),
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <>
      <div className={style.container}>
        <input
          type="search"
          placeholder="Pesquisar..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        {loading ? (
          <Loade />
        ) : (
          <VideosList
            videos={foundVideos}
            emptyHeading={`Sem vídeos sobre "${searchText}"`}
          />
        )}
      </div>
    </>
  );
}
export default SearchVideoList;
