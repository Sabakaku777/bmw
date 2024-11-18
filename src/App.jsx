import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background from "./components/background/background";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cars from "./pages/cars/cars";
import About from "./pages/about/about";
import Register from "./pages/login/login";
import Explore from "./pages/explore/explore";

function App() {
  const [loged, setLoged] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header loged={loged} setLoged={setLoged} />
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Register"
            element={<Register setLoged={setLoged} loged={loged} />}
          />
          <Route path="Explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function HomePage() {
  let heroData = [
    { text1: "Divo into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [text, setText] = useState(0);

  const [heroNum, setHeroNum] = useState(1);
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      {" "}
      <Background heroNum={heroNum} playVideo={playVideo} />
      <Hero
        heroData={heroData[heroNum]}
        heroNum={heroNum}
        setHeroNum={setHeroNum}
        playVideo={playVideo}
        setPlayVideo={setPlayVideo}
        setText={setText}
      />
    </>
  );
}

export default App;
