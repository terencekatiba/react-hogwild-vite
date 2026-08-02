import { useState } from "react";

function HogCard({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui card"
    >
      <div
        className="image"
        onClick={() => setShowDetails(!showDetails)}
      >
        <img
          src={hog.image}
          alt={`Photo of ${hog.name}`}
        />
      </div>

      <div
        className="content"
        onClick={() => setShowDetails(!showDetails)}
      >
        <h3>{hog.name}</h3>

        {showDetails && (
          <>
            <p>
              Specialty: {hog.specialty}
            </p>

            <p>{hog.weight}</p>

            <p>
              {hog.greased
                ? "Greased"
                : "Nongreased"}
            </p>

            <p>
              {hog["highest medal achieved"]}
            </p>
          </>
        )}
      </div>

      <div className="extra content">
        <button
          className="ui button"
          onClick={() => hideHog(hog.name)}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;