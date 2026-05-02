import { FaGithub, FaLinkedin, FaSpotify, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-content">
        <h1 className="home-title">
          <span className="home-name">marina lee</span> is an ai-native, mobile-first design engineer with a love for crafting
          delightful interfaces and building inclusive communities.
        </h1>

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
          href="https://open.spotify.com/user/marinalee217?si=054c964ae79541e0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaSpotify size={30} />
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
          href="mailto:leemarina@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaEnvelope size={30} />
        </a>
        </nav>
      </div>
    </main>
  );
}
