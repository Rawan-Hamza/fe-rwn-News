import React, { useState } from "react";
import { patchArticlesById } from "./Api";

function Votes({ votes, article_id }) {
  const [votesChange, setVotesChange] = useState(0);
  const [error, setError] = useState(false);

  const amendVotes = (num) => {
    setVotesChange((currentVotesChange) => currentVotesChange + num);
    patchArticlesById(article_id, num)
    .catch((err) => {
      setError(true);
      setVotesChange((currentVotesChange) => {
        return currentVotesChange - num;
      });
    })
    // .finally(() => setError(false))
  };

  return (
    <div className="vote">
      
      <button className="vote-button" onClick={() => amendVotes(1)}>
        👍 Like 
      </button>
      <span>votes: {votes + votesChange}</span>
      <button className="vote-button" onClick={() => amendVotes(-1)}>
        Dislike 👎
      </button>
    </div>
  );
}

export default Votes;
