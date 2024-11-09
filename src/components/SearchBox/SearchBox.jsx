// import s from "./SearchBox.module.css";

function SearchBox({ inputValue, handleChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </>
  );
}

export default SearchBox;
