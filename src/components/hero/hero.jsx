import "./hero.css";

export default function Hero({
  heroData,
  heroNum,
  setHeroNum,
  playVideo,
  setPlayVideo,
  setText,
}) {
  return (
    <div className="container">
      <div>
        <div className="title">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
      </div>
      <div className="explore">
        <h1>Explore the features</h1>
        <i class="fa-solid fa-right-long"></i>
      </div>
      <div className="footer">
        <div>
          <div className="dots">
            <li
              onClick={() => setHeroNum(0)}
              className={heroNum === 0 ? "actived" : ""}
            ></li>
            <li
              onClick={() => setHeroNum(1)}
              className={heroNum === 1 ? "actived" : ""}
            ></li>
            <li
              onClick={() => setHeroNum(2)}
              className={heroNum === 2 ? "actived" : ""}
            ></li>
          </div>
        </div>
        <div className="play-container">
          <div className="video-container">
            <div onClick={() => setPlayVideo(!playVideo)}>
              {playVideo ? (
                <i class="fa-solid fa-stop icon"></i>
              ) : (
                <i class="fa-solid fa-play icon"></i>
              )}
            </div>
            <p className="see">see the video</p>
          </div>
        </div>
      </div>
    </div>
  );
}
