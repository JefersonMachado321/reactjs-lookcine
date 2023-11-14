import style from './VideosList.module.css';
import Card from '../Card';

function VideosList({ videos, emptyHeading }) {
  const count = videos.length;
  //Pegar a quantidade de items que tem
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'vídeos' : 'vídeo';
    //Se meu count for maior que 1 escreva a palavra videos se não escreva video
    heading = `${count} ${noun}`;
  }

  return (
    <>
      <h1>{heading}</h1>
      <section className={style.videosList}>
        {videos.map((video) => (
          <Card id={video.id} key={video.id} />
        ))}
      </section>
    </>
  );
}
export default VideosList;
