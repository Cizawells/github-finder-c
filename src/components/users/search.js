import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, setAlert, clearUsers, showClear }) => {
  //

  const [text, setText] = useState();
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Users..."
          name="text"
          value={text}
          onChange={handleChange}
        />
        <input className="btn btn-dark btn-block" type="submit" />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
