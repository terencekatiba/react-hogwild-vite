import HogCard from "./HogCard";

function HogList({ hogs, hideHog }) {
  return (
    <div className="ui cards">
      {hogs.map((hog) => (
        <HogCard
          key={hog.name}
          hog={hog}
          hideHog={hideHog}
        />
      ))}
    </div>
  );
}

export default HogList;