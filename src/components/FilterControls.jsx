function FilterControls({
  greasedOnly,
  setGreasedOnly,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="greased-filter">
          Greased Pigs Only?
        </label>

        <input
          id="greased-filter"
          type="checkbox"
          checked={greasedOnly}
          onChange={(e) => setGreasedOnly(e.target.checked)}
        />
      </div>

      <div className="field">
        <label htmlFor="sort">
          Sort by:
        </label>

        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterControls;