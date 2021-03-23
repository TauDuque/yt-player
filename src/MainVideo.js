import { useState } from "react";
import ReactPlayer from "react-player";

const MainVid = () => {
  const urls = [
    "https://www.youtube.com/watch?v=IvmqYZr0RFo",
    "https://www.youtube.com/watch?v=j-J1YY4DScM",
  ];
  console.log(urls);
  const [index, setIndex] = useState(0);
  const getVideos = () => {
    setIndex(index + 1);
  };
  return (
    <div className="App">
      <div className="player">
        <div className="player-wrapper ">
          <ReactPlayer
            className="react-player"
            url={urls[`${index}`]}
            width="100%"
            height="100%"
          />
        </div>
        {/* mostrar controles  */}
        <div className="show-controls">
          {/* container de controler  */}
          <div className="controls-container">
            {/* barra de progresso  */}
            <div className="progress-range" title="Selecione">
              <div className="progress-bar"></div>
            </div>
            <div className="control-group">
              {/* controles da esquerda  */}
              <div className="controls-left">
                {/* controles de volume  */}
                <div className="volume">
                  <div className="volume-icon">
                    <i
                      className="fas fa-volume-up"
                      title="mute"
                      id="volume-icon"
                    ></i>
                  </div>
                  <div className="volume-range" title="controle de volume">
                    <div className="volume-bar"></div>
                  </div>
                </div>
              </div>
              {/* controles do centro  */}
              <div className="play-controls">
                {/* voltar vídeo */}
                <i className="fas fa-backward" onClick={() => getVideos()}></i>
                {/* play/pause */}
                <i className="fas fa-play" title="play"></i>
                {/* próximo vídeo */}
                <i className="fas fa-forward"></i>
              </div>
              {/* controles da direita */}
              <div className="controls-right">
                {/* velocidade  */}
                <div className="speed">
                  <select name="playbackRate" className="player-speed">
                    <option value="0.5">0.5 x</option>
                    <option value="0.75">0.75 x</option>
                    <option value="1" defaultValue>
                      1 x
                    </option>
                    <option value="1.5">1.5 x</option>
                    <option value="2">2 x</option>
                  </select>
                </div>
                {/* time */}
                <div className="time">
                  <span className="time-elapsed"> 00:00 / </span>
                  <span className="time-duration"> 0:22 </span>
                </div>
                {/* Fullscreen */}
                <div className="fullscreen">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVid;
