import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5   "
    >
      {results.map((results) => (
        <Thumbnail key={results.id} results={results} />
      ))}
    </FlipMove>
  );
};

export default Results;
