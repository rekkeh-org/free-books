import type { CSSProperties } from "react";
import { FloatingBooks } from "@/components/floating-books";

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap">
          <a className="brand" href="#top">
            Open<i>·</i>Pages
          </a>
          <ul>
            <li>
              <a href="#library">Library</a>
            </li>
            <li>
              <a href="#habit">Reading</a>
            </li>
            <li>
              <a href="#contribute">Contribute</a>
            </li>
            <li>
              <a href="#vision">Vision</a>
            </li>
          </ul>
          <a className="btn p" href="#library" style={{ padding: "9px 20px" }}>
            Explore
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="wrap grid">
            <div>
              <span className="eyebrow rv">A free reading initiative for Nigeria</span>
              <h1 className="rv" style={{ "--i": 1 } as CSSProperties}>
                A world of knowledge.{" "}
                <em style={{ color: "var(--amber)", fontWeight: 400 }}>
                  Open to everyone.
                </em>
              </h1>
              <p className="lead rv" style={{ "--i": 2 } as CSSProperties}>
                Books open minds, create opportunities and connect generations.
                We&apos;re building a free digital library where everyone can
                discover, read and listen to knowledge, regardless of their
                circumstances.
              </p>
              <div className="row rv" style={{ "--i": 3 } as CSSProperties}>
                <a className="btn p" href="#library">
                  Explore the Library
                </a>
                <a className="btn s" href="#support">
                  Support the Mission
                </a>
              </div>
              <p
                className="rv small"
                style={
                  {
                    "--i": 4,
                    marginTop: 18,
                    fontSize: "0.8rem",
                  } as CSSProperties
                }
              >
                Working name “Open Pages” is a temporary placeholder.
              </p>
            </div>
            <div className="stage" aria-hidden="true">
              <svg className="net" viewBox="0 0 100 100">
                <line x1="50" y1="50" x2="18" y2="20" />
                <line x1="50" y1="50" x2="82" y2="22" />
                <line x1="50" y1="50" x2="10" y2="62" />
                <line x1="50" y1="50" x2="90" y2="64" />
                <line x1="50" y1="50" x2="30" y2="90" />
                <line x1="50" y1="50" x2="72" y2="90" />
              </svg>
              <div className="book">
                <div className="pg" />
                <div className="pg" />
                <div className="pg" />
                <div className="cover">
                  Open
                  <br />
                  Pages
                </div>
              </div>
              <FloatingBooks />
            </div>
          </div>
        </section>

        <section id="problem">
          <div className="wrap">
            <span className="eyebrow rv">Access should never be a barrier</span>
            <h2 className="rv">
              There are stories waiting to be discovered. And minds waiting to
              grow.
            </h2>
            <p className="rv" style={{ maxWidth: 640 }}>
              Many people cannot afford to buy books. Educational resources are
              not equally accessible. Libraries and physical collections can be
              far away. Valuable Nigerian research is often hard to discover, and
              few people get the chance to build a steady reading habit.
            </p>
            <div className="split" id="dissolve">
              <div className="panel rv">
                <h3>Today: a book out of reach</h3>
                <div className="lockbook" aria-hidden="true" />
                <span className="tag t1">Cost</span>
                <span className="tag t2">Distance</span>
                <span className="tag t3">Limited collections</span>
                <p className="cap">
                  Where you live or what you can pay shouldn&apos;t decide what
                  you can read.
                </p>
              </div>
              <div className="panel rv" style={{ "--i": 1 } as CSSProperties}>
                <h3>With a free digital library</h3>
                <div className="devices" aria-hidden="true">
                  <div className="dev d1">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="dev d2">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="dev d3">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <p className="cap">The same library, on a phone, tablet or laptop.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="library">
          <div className="wrap">
            <span className="eyebrow rv">One library, many ways to learn</span>
            <h2 className="rv">Read it. Listen to it. Learn from it.</h2>
            <div className="cards">
              <article className="c rv">
                <div className="art" aria-hidden="true">
                  <b style={{ height: 90, background: "#1B2A4A" }} />
                  <b style={{ height: 115, background: "#C27803" }} />
                  <b style={{ height: 80, background: "#3a5a8c" }} />
                  <b style={{ height: 105, background: "#D9A441" }} />
                  <b style={{ height: 95, background: "#252525" }} />
                </div>
                <div className="t">
                  <h3>Digital Books</h3>
                  <p>
                    Explore literature, history, science, technology, business,
                    culture and education.
                  </p>
                </div>
              </article>
              <article className="c rv" style={{ "--i": 1 } as CSSProperties}>
                <div className="art" aria-hidden="true">
                  <svg viewBox="0 0 300 100">
                    <g fill="#C27803">
                      <rect x="20" y="40" width="6" height="40" rx="3" />
                      <rect x="36" y="25" width="6" height="70" rx="3" />
                      <rect x="52" y="35" width="6" height="50" rx="3" />
                      <rect x="68" y="15" width="6" height="85" rx="3" />
                      <rect x="84" y="30" width="6" height="60" rx="3" />
                      <rect x="100" y="42" width="6" height="36" rx="3" />
                      <rect x="116" y="22" width="6" height="76" rx="3" />
                      <rect x="132" y="35" width="6" height="50" rx="3" />
                      <rect x="148" y="10" width="6" height="90" rx="3" />
                      <rect x="164" y="30" width="6" height="60" rx="3" />
                      <rect x="180" y="40" width="6" height="40" rx="3" />
                      <rect x="196" y="20" width="6" height="78" rx="3" />
                      <rect x="212" y="38" width="6" height="44" rx="3" />
                      <rect x="228" y="28" width="6" height="64" rx="3" />
                      <rect x="244" y="44" width="6" height="32" rx="3" />
                    </g>
                  </svg>
                </div>
                <div className="t">
                  <h3>Audiobooks</h3>
                  <p>Listen while commuting, working or relaxing.</p>
                </div>
              </article>
              <article className="c rv">
                <div className="art" aria-hidden="true">
                  <b
                    style={{
                      height: 100,
                      background: "#fffdf7",
                      border: "1px solid var(--line)",
                    }}
                  />
                  <b style={{ height: 70, background: "#D9A441" }} />
                  <b style={{ height: 120, background: "#1B2A4A" }} />
                </div>
                <div className="t">
                  <h3>Research and Knowledge</h3>
                  <p>
                    Academic papers, university research and educational
                    publications.
                  </p>
                </div>
              </article>
              <article className="c rv" style={{ "--i": 1 } as CSSProperties}>
                <div className="art" aria-hidden="true">
                  <b style={{ height: 105, background: "#0a6b3d" }} />
                  <b
                    style={{
                      height: 85,
                      background: "#fffdf7",
                      border: "1px solid var(--line)",
                    }}
                  />
                  <b style={{ height: 115, background: "#0a6b3d" }} />
                </div>
                <div className="t">
                  <h3>Nigerian Stories and Languages</h3>
                  <p>
                    Nigerian authors, local knowledge, indigenous languages and
                    cultural heritage.
                  </p>
                </div>
              </article>
              <article className="c rv" style={{ "--i": 2 } as CSSProperties}>
                <div className="art" aria-hidden="true">
                  <b style={{ height: 75, background: "#C27803" }} />
                  <b style={{ height: 110, background: "#3a5a8c" }} />
                  <b style={{ height: 90, background: "#D9A441" }} />
                </div>
                <div className="t">
                  <h3>Open Educational Resources</h3>
                  <p>
                    Learning materials for students, teachers and lifelong
                    learners.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="habit">
          <div className="wrap">
            <span className="eyebrow rv">Reading should become a habit</span>
            <h2 className="rv">
              A little reading every day can change a lifetime.
            </h2>
            <p className="rv" style={{ maxWidth: 620 }}>
              We want reading to be consistent and enjoyable, with gentle tools
              that encourage you to keep going.
            </p>
            <div className="demo" id="journey">
              <div>
                <h3>A reading journey</h3>
                <p>
                  A reader opens a book, makes progress, builds a daily rhythm
                  and reaches a milestone.
                </p>
                <p className="small">
                  Product preview with illustrative sample data, not real user
                  statistics.
                </p>
              </div>
              <div
                className="screen"
                role="img"
                aria-label="Animated preview of reading progress, streak and achievement"
              >
                <strong>Chapter 7 · Sample book</strong>
                <div className="bar">
                  <i />
                </div>
                <small style={{ opacity: 0.7 }}>72% complete</small>
                <div className="days">
                  <span style={{ "--i": 0 } as CSSProperties}>M</span>
                  <span style={{ "--i": 1 } as CSSProperties}>T</span>
                  <span style={{ "--i": 2 } as CSSProperties}>W</span>
                  <span style={{ "--i": 3 } as CSSProperties}>T</span>
                  <span style={{ "--i": 4 } as CSSProperties}>F</span>
                </div>
                <div className="badge">
                  <span style={{ fontSize: "1.4rem" }} aria-hidden="true">
                    📖
                  </span>
                  <div>
                    <strong>Milestone reached</strong>
                    <br />
                    <small style={{ opacity: 0.75 }}>
                      Finished a book · 5-day reading rhythm
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="feat rv">
              <span>Reading goals</span>
              <span>Streaks</span>
              <span>Progress tracking</span>
              <span>Bookmarks &amp; highlights</span>
              <span>Challenges</span>
              <span>Community clubs</span>
              <span>School competitions</span>
              <span>Recommendations</span>
            </div>
          </div>
        </section>

        <section id="everyone">
          <div className="wrap">
            <span className="eyebrow rv">Built for everyone</span>
            <h2 className="rv">Knowledge belongs to everyone.</h2>
            <div className="ppl">
              <div className="pp rv">
                <h3>The secondary school student</h3>
                <p>Discovering a new subject.</p>
              </div>
              <div className="pp rv" style={{ "--i": 1 } as CSSProperties}>
                <h3>The university student</h3>
                <p>Researching a topic in depth.</p>
              </div>
              <div className="pp rv" style={{ "--i": 2 } as CSSProperties}>
                <h3>The young professional</h3>
                <p>Learning a new skill.</p>
              </div>
              <div className="pp rv">
                <h3>The parent</h3>
                <p>Encouraging a child&apos;s reading habit.</p>
              </div>
              <div className="pp rv" style={{ "--i": 1 } as CSSProperties}>
                <h3>The listener</h3>
                <p>Enjoying an audiobook on the move.</p>
              </div>
              <div className="pp rv" style={{ "--i": 2 } as CSSProperties}>
                <h3>The author</h3>
                <p>Sharing a publication with readers.</p>
              </div>
              <div className="pp rv">
                <h3>The teacher</h3>
                <p>Recommending learning materials.</p>
              </div>
            </div>
            <p
              className="small rv"
              style={{ marginTop: 18, fontSize: "0.8rem" }}
            >
              Photography of Nigerian readers to be added once consented,
              authentic images are sourced.
            </p>
          </div>
        </section>

        <section id="contribute">
          <div className="wrap">
            <span className="eyebrow rv">A community that shares knowledge</span>
            <h2 className="rv">The next great book might come from you.</h2>
            <p className="rv" style={{ maxWidth: 640 }}>
              Authors, publishers, universities, schools, researchers, educators
              and individuals with appropriately licensed publications are
              welcome.
            </p>
            <div className="three">
              <article className="c rv">
                <div className="num">01</div>
                <h3>Donate Books</h3>
                <p>
                  Expand the collection with works you have the rights to share,
                  or support digitisation and licensing.
                </p>
              </article>
              <article className="c rv" style={{ "--i": 1 } as CSSProperties}>
                <div className="num">02</div>
                <h3>Publish Your Research</h3>
                <p>
                  Make approved academic work accessible to a wider audience.
                </p>
              </article>
              <article className="c rv" style={{ "--i": 2 } as CSSProperties}>
                <div className="num">03</div>
                <h3>Partner With Us</h3>
                <p>
                  Bring free reading to more communities through institutional
                  and corporate partnerships.
                </p>
              </article>
            </div>
            <p className="note rv">
              <strong>Please note:</strong> copyrighted works require appropriate
              permission or a licence. Donating a physical book does not
              automatically grant the right to distribute it digitally.
            </p>
            <div className="rv" style={{ marginTop: 26 }}>
              <a className="btn p" href="#contact">
                Become a Contributor
              </a>
            </div>
          </div>
        </section>

        <section id="vision">
          <div className="wrap mapbox">
            <div>
              <span className="eyebrow rv">Our vision for Nigeria</span>
              <h2 className="rv">
                Starting in Ikulu. Opening doors across Nigeria.
              </h2>
              <p className="rv">
                We believe every community deserves access to books, ideas and
                opportunities to learn. We&apos;re starting locally, with a
                vision to make knowledge accessible nationwide.
              </p>
              <p
                className="rv"
                style={{
                  color: "var(--navy)",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                }}
              >
                Knowledge for everyone, everywhere.
              </p>
            </div>
            <div className="map" id="map">
              <svg
                viewBox="0 0 300 270"
                role="img"
                aria-label="Stylised map of Nigeria with Ikulu, Lagos as the pilot location and other regions as future possibilities"
              >
                <path
                  className="outline"
                  d="M48 205 L38 150 L55 100 L40 70 L90 42 L150 28 L205 40 L255 36 L282 82 L262 130 L240 175 L200 215 L150 238 L100 232 L68 215 Z"
                />
                <g strokeLinecap="round">
                  <line
                    className="ray"
                    style={{ "--i": 0 } as CSSProperties}
                    x1="58"
                    y1="205"
                    x2="150"
                    y2="70"
                  />
                  <line
                    className="ray"
                    style={{ "--i": 1 } as CSSProperties}
                    x1="58"
                    y1="205"
                    x2="230"
                    y2="80"
                  />
                  <line
                    className="ray"
                    style={{ "--i": 2 } as CSSProperties}
                    x1="58"
                    y1="205"
                    x2="200"
                    y2="170"
                  />
                  <line
                    className="ray"
                    style={{ "--i": 3 } as CSSProperties}
                    x1="58"
                    y1="205"
                    x2="95"
                    y2="105"
                  />
                  <line
                    className="ray"
                    style={{ "--i": 4 } as CSSProperties}
                    x1="58"
                    y1="205"
                    x2="150"
                    y2="205"
                  />
                </g>
                <circle
                  className="fut"
                  style={{ "--i": 0 } as CSSProperties}
                  cx="150"
                  cy="70"
                  r="5"
                />
                <circle
                  className="fut"
                  style={{ "--i": 1 } as CSSProperties}
                  cx="230"
                  cy="80"
                  r="5"
                />
                <circle
                  className="fut"
                  style={{ "--i": 2 } as CSSProperties}
                  cx="200"
                  cy="170"
                  r="5"
                />
                <circle
                  className="fut"
                  style={{ "--i": 3 } as CSSProperties}
                  cx="95"
                  cy="105"
                  r="5"
                />
                <circle
                  className="fut"
                  style={{ "--i": 4 } as CSSProperties}
                  cx="150"
                  cy="205"
                  r="5"
                />
                <circle className="pulse" cx="58" cy="205" r="6" />
                <circle className="pin" cx="58" cy="205" r="6" />
                <text
                  x="70"
                  y="222"
                  fontSize="11"
                  fontWeight="700"
                  fill="currentColor"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Ikulu, Lagos · Pilot
                </text>
              </svg>
              <p className="mapnote" style={{ textAlign: "center" }}>
                Stylised outline. Faded points show future possibilities, not
                operating locations.
              </p>
            </div>
          </div>
        </section>

        <section id="support">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <span className="eyebrow rv">Support the mission</span>
            <h2 className="rv">Help make reading accessible to everyone.</h2>
            <p className="rv">
              The library is free for readers and relies on collective support.
              Contributions go towards content acquisition, licensing,
              technology, accessibility and community reading initiatives.
            </p>
            <div className="ways rv">
              <div>Make a donation</div>
              <div>Sponsor a reading programme</div>
              <div>Become an institutional partner</div>
            </div>
            <div className="row rv">
              <a className="btn p" href="#contact">
                Support the Mission
              </a>
              <a className="btn s" href="#contact">
                Become a Partner
              </a>
            </div>
            <p
              className="small rv"
              style={{ marginTop: 14, fontSize: "0.8rem" }}
            >
              Donation and partner links are placeholders until payment and
              enquiry channels are set up.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="final" id="finale">
            <div className="openbook" aria-hidden="true">
              <div className="half l">
                <i />
                <i />
                <i />
              </div>
              <div className="half r">
                <i />
                <i />
                <i />
              </div>
            </div>
            <h2>Every great journey begins with a page.</h2>
            <p>
              Discover something new. Read something meaningful. Share what you
              know. Help us build a future where knowledge is accessible to
              everyone.
            </p>
            <div className="row">
              <a className="btn p" href="#library">
                Start Reading
              </a>
              <a className="btn s" href="#contact">
                Join the Movement
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="wrap">
          <div className="g">
            <div>
              <a className="brand" href="#top">
                Open<i>·</i>Pages
              </a>
              <p style={{ marginTop: 10, maxWidth: 300 }}>
                A free reading initiative making books and knowledge accessible
                to everyone in Nigeria.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="#library">Explore the Library</a>
                </li>
                <li>
                  <a href="#vision">About the Initiative</a>
                </li>
                <li>
                  <a href="#contribute">Contribute a Publication</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Get involved</h4>
              <ul>
                <li>
                  <a href="#support">Donate</a>
                </li>
                <li>
                  <a href="#support">Partnerships</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#contact">Privacy Policy</a>
                </li>
                <li>
                  <a href="#contact">Terms of Use</a>
                </li>
                <li>
                  <a href="#contact">Copyright &amp; Content Policies</a>
                </li>
              </ul>
              <h4 style={{ marginTop: 16 }}>Social</h4>
              <ul>
                <li>
                  <a href="#contact">X</a>
                </li>
                <li>
                  <a href="#contact">Instagram</a>
                </li>
                <li>
                  <a href="#contact">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="close">
            Made for readers. Built around knowledge. Open to everyone.
          </p>
        </div>
      </footer>
    </>
  );
}
