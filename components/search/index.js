import { useState, useRef, useEffect } from "react";
import { useKeyPress } from "../../hooks/useKeyPress";
import Input from "../input";
import Button from "../button";

function Search({ onSearch }) {
  const [val, setVal] = useState("");
  const input = useRef(null);

  useKeyPress("Escape", () => {
    input.current.focus();
  });

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
        ref={input}
        name="search"
        autoComplete="off"
        className="max-w-lg text-6xl"
        placeholder="press esc to focus"
        value={val}
        onChange={handleChangeSearch}
        onKeyPress={handleKeyPressSearch}
      />
      <Button
        type="button"
        className="max-w-xs my-2 text-2xl text-primary-dark"
        onClick={triggerSearch}
      >
        Search!
      </Button>
    </>
  );
}

export default Search;
