import { useState } from "react";

function AddHogForm({ addHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const newHog = {
      name,
      weight: Number(weight),
      specialty,
      greased,
      image: "",
      "highest medal achieved": "none",
    };

    addHog(newHog);

    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">
          Name:
        </label>

        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="weight">
          Weight:
        </label>

        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">
          Specialty:
        </label>

        <input
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="greased">
          Greased?
        </label>

        <input
          id="greased"
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </div>

      <button className="ui button primary" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default AddHogForm;