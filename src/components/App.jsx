import React, { useState } from "react";
import Nav from "./Nav";

import hogsData from "../porkers_data";

import FilterControls from "./FilterControls";
import AddHogForm from "./AddHogForm";
import HogList from "./HogList";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function hideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function addHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  let displayedHogs = [...hogs];

  // Filter
  if (greasedOnly) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }

  // Sort
  if (sortBy === "name") {
    displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "weight") {
    displayedHogs.sort((a, b) => a.weight - b.weight);
  }

  // Hide
  displayedHogs = displayedHogs.filter(
    (hog) => !hiddenHogs.includes(hog.name)
  );

  return (
    <div className="App">
      <Nav />

      <FilterControls
        greasedOnly={greasedOnly}
        setGreasedOnly={setGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <AddHogForm addHog={addHog} />

      <HogList
        hogs={displayedHogs}
        hideHog={hideHog}
      />
    </div>
  );
}

export default App;