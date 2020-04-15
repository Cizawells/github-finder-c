import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers, users } = githubContext;
  const showClear = users.length > 0 ? true : false;

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
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

// Search.propTypes = {
//   searchUsers: PropTypes.func.isRequired,
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired,
// };

export default Search;
