import style from './ScrollButton.module.css';
function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button onClick={handleClick} className={style.scrollButton}>
        {' '}
        &#9650;
      </button>
    </>
  );
}
export default ScrollToTopButton;
