export default function Home() {
  return (
    <>
      <nav id="nav-bar">
        <div>
          <div id="logo">
            <a href="#intro">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img id="ml-logo" src="/main-assets/ml-logo.png" alt="ML logo" />
            </a>
          </div>
          <div id="nav-options">
            <ul>
              <li>
                <a href="mailto:leemarina@gmail.com">Email ↗</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marinahylee/" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="/Marina-Lee-Resume-Jan2024.pdf" target="_blank" rel="noopener noreferrer">
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="intro">
        <div className="container">
          <div id="main-title-text">
            <h1 id="main-title-script">Hey there! I&apos;m</h1>
            <h1 id="main-title-serif">MARINA LEE</h1>
            <h2
              id="intro-blurb"
              style={{ fontFamily: "'Gilmer Bold'", color: "rgb(172, 114, 220)" }}
            >
              I&apos;m passionate about providing equitable access to education in technology,
              designing for accessibility, and building communities.
            </h2>
            <h2 id="cs">Computer Science @ USC ✌️</h2>
            <h3 style={{ fontFamily: "'Gilmer Bold'", color: "rgb(78, 115, 199)" }}>
              Recently, I...
            </h3>
            <h3>
              • developed project management skills at{" "}
              <span style={{ fontFamily: "'Gilmer Bold'", color: "var(--pink)" }}>
                RTX x Girls Who Code Leadership Academy
              </span>
            </h3>
            <h3>
              • led and organized a hackathon for 1K+ students from 51 countries at{" "}
              <a href="https://citro.tech" target="_blank" rel="noopener noreferrer">
                <span style={{ fontFamily: "'Gilmer Bold'", color: "var(--pink)" }}>Citro Tech</span>
              </a>
            </h3>
            <h3>
              • built front-end solutions at the{" "}
              <a href="https://tech4good.soe.ucsc.edu/#/" target="_blank" rel="noopener noreferrer">
                <span style={{ fontFamily: "'Gilmer Bold'", color: "var(--pink)" }}>
                  Tech4Good Research Lab
                </span>
              </a>
            </h3>
            <h3>
              • learned about technical consulting at{" "}
              <span style={{ fontFamily: "'Gilmer Bold'", color: "var(--pink)" }}>
                Accenture x Girls Who Code Work Prep
              </span>
            </h3>
            <h3>
              • was named one of{" "}
              <a href="https://top.mlh.io/2023/profiles/marina-lee" target="_blank" rel="noopener noreferrer">
                <span style={{ fontFamily: "'Gilmer Bold'", color: "var(--pink)" }}>MLH Top 50</span>
              </a>{" "}
              hackers
            </h3>
            <h2
              style={{
                fontFamily: "'Gilmer Bold'",
                marginTop: "1.6em",
                fontSize: "1.1em",
                color: "var(--dark-gray)",
              }}
            >
              I&apos;m interested in software engineering and/or product design roles. Reach out to
              chat!
            </h2>
            <h3>
              <a href="https://github.com/namarilee" target="_blank" rel="noopener noreferrer">
                <button id="resume">Projects ↗</button>
              </a>
            </h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img id="pfp-img" src="/main-assets/website-pic.png" alt="Marina Lee" />
        </div>
      </section>

      <footer>
        <h3>💻🎨 Marina Lee 2024</h3>
      </footer>
    </>
  );
}
