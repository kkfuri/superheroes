import { useState } from "react";
import Input from "../input";
import Button from "../button";

function Search({ onSearch }) {
  const [val, setVal] = useState("");

  function handleChangeSearch(e) {
    setVal(e.target.value);
  }

  function handleKeyPressSearch(e) {
    if (e.key === "Enter") {
      triggerSearch();
    }
  }

  function triggerSearch() {
    onSearch(val);
  }
  return (
    <>
      <Input
        type="text"
        autoFocus
        name="search"
        autoComplete="off"
        className="text-6xl max-w-lg"
        placeholder="type here..."
        value={val}
        onChange={handleChangeSearch}
        onKeyPress={handleKeyPressSearch}
      />
      <Button
        type="button"
        className="my-2 text-2xl text-primary-dark max-w-xs"
        onClick={triggerSearch}
      >
        Search!
      </Button>
    </>
  );
}

export default Search;
