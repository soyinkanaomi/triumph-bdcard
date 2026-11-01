import { useState } from "react";
import FloatingHearts from "./components/floatingheart";
import Confetti from "./components/confetti";
import TeddyFairy from "./components/fairy";
import "./App.css";

const FIRST_NAME = "Ayomide";
const FULL_NAME = "Oyedoku Ayomide Triumph";
const NICKNAME = "Duduyemi";
const AUDIOMACK_EMBED = "https://audiomack.com/embed/jvke/song/pretty-3144522";
const AUDIOMACK_PAGE = "https://audiomack.com/jvke/song/pretty-3144522";

const PARAGRAPHS: string[] = [
  "Once upon a time, a girl turned eighteen, and the whole sky decided to sparkle a little brighter just for her.",
  "Nobody hands you a map for this part, so the fairy packed a few things for you: courage for the scary days, softness for the tired ones, and a laugh loud enough to chase doubt out of the room.",
  "You don't have to figure everything out by tomorrow. Be curious, be kind, be a little dramatic when it's fun. The world is lucky you showed up in it.",
];

const WISHES: string[] = [
  "May your peace always be louder than your worries.",
  "May your yes be brave and your no be easy.",
  "May every door you knock on open, and the ones that don't lead somewhere even better.",
];

export default function App() {
  const [casting, setCasting] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [playerOpen, setPlayerOpen] = useState<boolean>(true);

  const handleCast = (): void => {
    if (casting) return;
    setCasting(true);
    window.setTimeout(() => setOpened(true), 1300);
  };

  return (
    <main className="page">
      {!opened && (
        <div className={`intro ${casting ? "leaving" : ""}`}>
          <p className="intro-small">a little magic for you</p>
          <h1 className="intro-name">{FIRST_NAME}</h1>

          <TeddyFairy casting={casting} onCast={handleCast} />

          <button className="intro-btn" onClick={handleCast}>
            Wave the wand ✨
          </button>
          <p className="intro-hint">(or tap the teddy)</p>
        </div>
      )}

      {opened && (
        <>
          <Confetti count={70} />
          <FloatingHearts count={18} />

          <div className="player">
            <button
              className="player-toggle"
              onClick={() => setPlayerOpen((v) => !v)}
            >
              {playerOpen ? "✕ Hide" : "♪ Music"}
            </button>

            <div className={`player-panel ${playerOpen ? "" : "closed"}`}>
              <p className="player-label">♪ press play</p>
              <iframe
                src={AUDIOMACK_EMBED}
                scrolling="no"
                width="100%"
                height="252"
                title="Pretty by JVKE"
                className="player-frame"
              />
              <a
                className="song-link"
                href={AUDIOMACK_PAGE}
                target="_blank"
                rel="noreferrer"
              >
                Open on Audiomack ♡
              </a>
            </div>
          </div>

          <header className="hero">
            <p className="tagline">✿ welcome to adulthood ✿</p>
            <h1 className="title-light">Happy Birthday</h1>
            <h2 className="title-script">{FIRST_NAME}</h2>

            <div className="badge">
              <span>18</span>
            </div>

            <p className="aka">( a.k.a {NICKNAME} )</p>
            <div className="divider">✦</div>
          </header>

          <section className="card">
            <span className="spark tl">✦</span>
            <span className="spark tr">✦</span>

            <p className="card-title">Happy 18th, {FULL_NAME} 🎀💖</p>

            {PARAGRAPHS.map((line, i) => (
              <p
                key={i}
                className="card-text"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {line}
              </p>
            ))}

            <p className="wishes-title">✨ three wishes from the wand ✨</p>
            <ul className="wishes">
              {WISHES.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>

            <p className="signoff">
              With love, <em>Naomi</em> ♡
            </p>
          </section>
        </>
      )}
    </main>
  );
}
