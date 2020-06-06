import { IoIosSad } from "react-icons/io";
import { FaSpider } from "react-icons/fa";
import { GiBatWing, GiAnt } from "react-icons/gi";

function Suggestion({ value, children, onClick }) {
  return (
    <strong
      className="flex items-center justify-center duration-200 cursor-pointer hover:text-gray-900"
      onClick={() => onClick(value)}
    >
      {children}
    </strong>
  );
}

function ErrorState({ onClickSuggestion }) {
  return (
    <div className="flex-1 mt-4 text-center">
      <h2 className="flex items-center justify-center text-4xl md:text-6xl text-primary-dark">
        No results!{" "}
        <span className="ml-4">
          <IoIosSad />
        </span>
      </h2>
      <p className="text-xl text-primary-dark font-body">
        try something like:
        <Suggestion onClick={onClickSuggestion} value="spider">
          spider
          <span className="ml-2">
            <FaSpider />
          </span>
        </Suggestion>
        <Suggestion onClick={onClickSuggestion} value="bat">
          bat
          <span className="ml-2">
            <GiBatWing />
          </span>
        </Suggestion>
        <Suggestion onClick={onClickSuggestion} value="ant">
          ant
          <span className="ml-2">
            <GiAnt />
          </span>
        </Suggestion>
      </p>
    </div>
  );
}

export default ErrorState;
