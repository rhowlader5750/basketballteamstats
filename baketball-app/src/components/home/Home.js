import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Basketball Stats</h1>
        <p className="hero-subtitle">Your source for the latest NBA season stats</p>
      </div>

      {/* Two-column layout */}
      <div className="home-wrapper">
        <div className="image-section">
          <img src="/homepagename.webp" alt="Basketball" className="home-image" />
        </div>
        <div className="text-section">
          <h2>Where it came from:</h2>
          <p>
            Using a{' '}
            <a
              href="https://www.basketball-reference.com/leagues/NBA_2024.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              site
            </a>{' '}
            that stores basketball stats, I created a website to show you the stats
            of the most recent basketball season.
          </p>
          <p>Search for players based on teams or position.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
