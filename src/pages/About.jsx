import { useTheme } from "../context/ThemeContext";
import "../styles/About.css";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <main className={`about-container ${darkMode ? "dark" : ""}`}>
      <section className="about-section">
        <h1 className="about-title">
          <span className="gradient-text">About Me</span>
        </h1>
      </section>

      <section className="about-section about-bio">
        <div className="about-image-container">
          <img
            src="/ProfilePicture.jpeg"
            alt="Aarav"
            className="about-profile-image"
          />
        </div>
        <div className="about-content">
          <p className="about-text">
            <span className="text-accent">Hey, I’m Aarav</span>, a Computer Science undergrad passionate about building solutions that solve my own problems and simplify life. I have a strong foundation in <span className="highlight-green">C</span> and <span className="highlight-green">Python</span>, and I'm diving deep into the world of <span className="highlight-yellow">data science</span> and <span className="highlight-blue">software engineering</span>.
          </p>

          <p className="about-text">
            I regularly use libraries like <span className="highlight-purple">Seaborn</span>, <span className="highlight-purple">Matplotlib</span>, and <span className="highlight-purple">Pandas</span> for exploratory data analysis and enjoy working on <span className="highlight-red">ML pipelines</span> to streamline workflows. I'm currently expanding my knowledge in <span className="highlight-blue">OOP concepts</span> and <span className="highlight-red">competitive programming</span> to level up my problem-solving.
          </p>

          <p className="about-text">
            My tech stack includes full-stack modules like the <span className="highlight-purple">MERN stack</span> and data-focused frameworks such as <span className="highlight-yellow">Flask</span> for backend, alongside APIs for richer integrations. Whether it’s building logic-heavy systems or crafting clean UIs, I enjoy the balance of structure and creativity.
          </p>

          <p className="about-text">
            I've worked on impactful projects like:
            <ul>
              <li><span className="highlight-blue">AI Directory Manager:</span> A Python-Flask app that scans and analyzes files within a directory.</li>
              <li><span className="highlight-blue">Smart Closet Manager:</span> A weather-aware fashion assistant using Gemini and Weather APIs with JavaScript.</li>
              <li><span className="highlight-blue">CPU Scheduler Visualizer:</span> Built with Python and Flask, it simulates core OS scheduling algorithms like FCFS, SJF, RR, and Priority.</li>
            </ul>
          </p>

          <p className="about-text">
            I'm currently looking for <span className="highlight-blue">SDE internships</span> to deepen my engineering expertise while contributing to real-world tech solutions.
          </p>
        </div>
      </section>

      <section className="about-section about-interests">
        <h2 className="interests-title">
          What am I like outside of work? <span className="text-gradient">I'm glad you asked.</span>
        </h2>

        <div className="interests-grid">
          <div className="interest-item">
            <div className="interest-text">
              <div className="interest-header">
                <h3 className="interest-title1">Travel & Sports Enthusiast</h3>
              </div>
              <p className="interest-description">
                Traveling helps me break routine and gain perspective, while watching live sports—especially <span className="text-emphasis">cricket</span> and <span className="text-emphasis">MMA</span>—keeps my adrenaline going. I love analyzing gameplay strategies and following my favorite athletes.
              </p>
            </div>
            <div className="interest-image">
              <img
                src="https://ufc.com/images/styles/background_image_sm/s3/2021-01/Glove%20Touch%20Generic%20Image%20Dont%20Change%20This%20One.jpg?h=0a015d28&itok=uxZhO_Eq"
                alt="Travel and Sports"
                className="interest-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-experience"></section>

      <style jsx>{`
        .gradient-text {
          background: ${darkMode ? "linear-gradient(90deg, #8ab4f8, #81c995)" : "linear-gradient(90deg, #4285f4, #34a853)"};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }

        .text-gradient {
          background: ${darkMode ? "linear-gradient(90deg, #f28b82, #fdd663)" : "linear-gradient(90deg, #ea4335, #fbbc04)"};
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }

        .text-accent {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"};
          font-weight: 600;
        }

        .text-emphasis {
          color: ${darkMode ? "#fdd663" : "#fbbc04"};
          font-weight: 500;
        }

        .highlight-blue {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"};
          font-weight: 500;
        }

        .highlight-red {
          color: ${darkMode ? "#f28b82" : "#ea4335"};
          font-weight: 500;
        }

        .highlight-yellow {
          color: ${darkMode ? "#fdd663" : "#fbbc04"};
          font-weight: 500;
        }

        .highlight-green {
          color: ${darkMode ? "#81c995" : "#34a853"};
          font-weight: 500;
        }

        .highlight-purple {
          color: ${darkMode ? "#c58af9" : "#a142f4"};
          font-weight: 500;
        }

        .list-highlight {
          color: ${darkMode ? "#8ab4f8" : "#4285f4"};
          font-weight: 500;
        }
      `}</style>
    </main>
  );
}
