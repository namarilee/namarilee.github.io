import Image from "next/image";
import { FaGithub, FaLinkedin, FaSpotify, FaXTwitter, FaEnvelope, FaHeart, FaGraduationCap, FaMapPin } from "react-icons/fa6";
import { PiCoffeeBeanFill, PiCoffeeFill } from "react-icons/pi";
import { TbBubbleTea } from "react-icons/tb";

import marinaTimcook from "../main-assets/marina_timcook.JPG";
import evacumatePreviewIcon from "../main-assets/evacumate_preview_icon.png";
import marinaMlh from "../main-assets/marina_mlh.jpg";
import roleGroups from "./data/roles";

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          <span className="home-name">marina lee</span> is an ai-native, mobile-first design engineer with a love for crafting
          delightful interfaces and building inclusive communities.
        </h1>
        <p className="home-meta" aria-label="Education and location">
          <FaGraduationCap aria-hidden="true" />
          <span>Computer Science BS + MS &apos;27 @ USC</span>
          <FaMapPin className="home-meta-pin" aria-hidden="true" />
          <span>LA, SF</span>
        </p>

        <nav className="social-links" aria-label="Social media links">
          <a
          href="https://www.linkedin.com/in/marinahylee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin size={30} />
        </a>
          <a
          href="https://github.com/namarilee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://x.com/marinaxlee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaXTwitter size={30} />
        </a>
        <a
          href="https://open.spotify.com/user/marinalee217?si=054c964ae79541e0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaSpotify size={30} />
        </a>
        <a
          href="mailto:leemarina@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaEnvelope size={30} />
        </a>
        </nav>

        <section className="highlights" aria-label="Highlights">
          <h2 className="highlights-title">HIGHLIGHTS</h2>
          <div className="highlights-row">
            <a href="https://www.entrepreneur.com/science-technology/meet-a-swift-student-challenge-winner-attending-apples-wwdc/492984" target="_blank" rel="noopener noreferrer">
              <Image
                src={marinaTimcook}
                alt="Marina at a Tim Cook event"
                className="highlight-image"
              />
            </a>
            <a href="https://apps.apple.com/us/app/evacumate/id6753133736" target="_blank" rel="noopener noreferrer">
              <Image
                src={evacumatePreviewIcon}
                alt="Evacumate preview icon"
                className="highlight-image"
              />
            </a>
            <a href="https://top.mlh.io/2023/profiles/marina-lee" target="_blank" rel="noopener noreferrer">
              <Image
                src={marinaMlh}
                alt="Marina MLH highlight"
                className="highlight-image"
              />
            </a>
          </div>
        </section>
        {/* Role sections driven from `app/data/roles.ts` */}
        {Object.entries(roleGroups).map(([key, items]) =>
          items && items.length > 0 ? (
            <section key={key} className={key} aria-label={key}>
              <h2 className="currently-title">{key.toUpperCase()}</h2>
              <div className="roles-list">
                {items.map((it, i) => (
                  <div className="role" key={i}>
                    <div className="currently-content">
                      <p className="currently-role">
                        <span className="currently-bold">{it.company} /</span> {it.title}
                      </p>
                      <p className="currently-date">{it.year}</p>
                    </div>
                    <div className="currently-divider" />
                  </div>
                ))}
              </div>
            </section>
          ) : null
        )}
      </div>

      
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-text">
          <span>DESIGNED & BUILT WITH</span>
          <FaHeart aria-hidden="true" />
          <span> + </span>
          <TbBubbleTea aria-hidden="true"/>
          <PiCoffeeFill aria-hidden="true" />
          <PiCoffeeBeanFill aria-hidden="true" />
          <span>BY MARINA</span>
        </div>
      </footer>

    </main>
  );
}
